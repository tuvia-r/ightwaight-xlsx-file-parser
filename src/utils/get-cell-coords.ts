import { columnNameToNumber } from "./column-name-to-number";

export const getCellCoords = (cellString: string) => {
	const [colSrt, rowStr] = cellString.split(/([0-9]+)/);
	return {
		row: parseInt(rowStr),
		column: columnNameToNumber(colSrt),
	};
};
