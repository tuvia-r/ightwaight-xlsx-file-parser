export class Cell {
	type = "";
	data: string | number | undefined | null = "";
	row = -1;
	column = -1;

	constructor(init?: Partial<Cell>) {
		Object.assign(this, init);
	}
}
