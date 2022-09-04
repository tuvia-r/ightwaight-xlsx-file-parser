

export class Cell {
    type: string = '';
    data: string | number | undefined | null = '';
    row: number = -1;
    column: number = -1;

    constructor(init?: Partial<Cell>){
        Object.assign(this, init)
    }
}