import { Cell } from "./parts/cell";
import { Column } from "./parts/column";
import { Row } from "./parts/row";

export class Sheet {
	cells: Cell[] = [];
	columnNames: string[] = [];
	name = "";

	constructor(init?: Partial<Sheet>) {
		Object.assign(this, init);
	}
	get numberOfRows() {
		return Math.max(...this.cells.map((c) => c.row));
	}

	get numberOfColumns() {
		return Math.max(...this.cells.map((c) => c.column));
	}

	get startRow() {
		return Math.min(...this.cells.map((c) => c.row));
	}

	get startColumn() {
		return Math.min(...this.cells.map((c) => c.column));
	}

	get rowsAsJson(): (string | number)[][] {
		const res: any[] = [];
		for (
			let i = this.startRow;
			i < this.numberOfRows;
			i++
		) {
			res.push(this.getRow(i).asJson);
		}
		return res;
	}

	getRow(index: number) {
		if (
			index > this.numberOfRows ||
			index < this.startRow
		) {
			throw new Error(`index ${index} out of bounds`);
		}
		const numberOfColumns = this.numberOfColumns;
		const rowCells: Cell[] = [];
		for (
			let col = this.startColumn;
			col < numberOfColumns;
			col++
		) {
			rowCells.push(this.getCell(index, col));
		}
		return new Row({
			cells: rowCells,
		});
	}

	getColumn(index: number) {
		if (
			index > this.numberOfColumns ||
			index < this.startColumn
		) {
			throw new Error(`index ${index} out of bounds`);
		}
		const numberOfRows = this.numberOfRows;
		const colCells: Cell[] = [];
		for (
			let row = this.startRow;
			row < numberOfRows;
			row++
		) {
			colCells.push(this.getCell(row, index));
		}
		return new Column({
			cells: colCells,
		});
	}

	getCell(row: number, column: number) {
		let cell = this.cells.find(
			(c) => c.row === row && c.column === column
		);
		if (!cell) {
			cell = new Cell({
				column,
				row,
			});
			this.cells.push(cell);
		}
		return cell;
	}
}
