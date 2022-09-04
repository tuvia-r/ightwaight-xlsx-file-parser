import { Cell } from "./cell";

export class Column {
	cells: Cell[] = [];

	get asJson() {
		return this.cells.map((c) => c.data);
	}

	constructor(init?: Partial<Column>) {
		Object.assign(this, init);
	}
}
