import XLSXParser from 'xlsx-file-parser-light';


const uploadFileBtn = document.getElementById('upload-button');
const fileInput = document.getElementById('file-input') as HTMLInputElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;

function makeTableHTML(ar: any[]) {
    return `<table class="table table-striped table-bordered">
    <thead>${ar.slice(0, 1).reduce((c, o) => c += `<tr scope="col">${o.reduce((c: any, d: any) => (c += `<td>${d}</td>`), '')}</tr>`, '')}<thead>
    <tbody>${ar.slice(1).reduce((c, o) => c += `<tr scope="row">${o.reduce((c: any, d: any) => (c += `<td>${d}</td>`), '')}</tr>`, '')}<tbody>
    </table>`
}

Object.assign(window, { uploadFileBtn, fileInput, resultDiv })

uploadFileBtn.addEventListener('click', () => {
    fileInput.click()
    console.log(fileInput)
})

fileInput.addEventListener('change', async () => {
    const file = fileInput.files[0]
    console.log(file)
    if (!file) {
        return;
    }

    const buffer = await new Promise<Buffer>((res) => {

        const reader = new FileReader()
        reader.onload = async (e: ProgressEvent<FileReader>) => {
            const data = e.target?.result as Buffer;
            res(data)
        };

        reader.readAsArrayBuffer(file)
    })

    console.log(buffer)
    const parser = new XLSXParser(Buffer.from(buffer))
    const result = await parser.parse()

    resultDiv.replaceChildren()

    for (const sheet of result.reverse()) {
        const rows = sheet.rowsAsJson
        const tableStr = makeTableHTML(rows)
        resultDiv.insertAdjacentHTML('beforeend', `<h2>${sheet.name}</h2>`)
        resultDiv.insertAdjacentHTML('beforeend', tableStr)
    }

    // resultDiv.innerText = JSON.stringify(result, null, 2)

})

