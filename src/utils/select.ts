import xpath from 'xpath';


const xlsxNameSpace = { a: 'http://schemas.openxmlformats.org/spreadsheetml/2006/main' };

export const select = xpath.useNamespaces(xlsxNameSpace);