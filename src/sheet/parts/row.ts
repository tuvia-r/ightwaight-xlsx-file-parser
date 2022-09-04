import { Cell } from "./cell"
import { Column } from "./column"

export class Row {
    cells: Cell[] = []
    
    get asJson() {
        return this.cells.map(c => c.data)
    }

    constructor(init?: Partial<Column>){
        Object.assign(this, init)
    }
}