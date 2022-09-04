export function columnNameToNumber(col: string) {
	const letters = [
		"",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	const colSplitted = col.trim().split("");

	let n = 0;

	for (let i = 0; i < colSplitted.length; i++) {
		n *= 26;
		n += letters.indexOf(col[i]);
	}

	return n;
}
