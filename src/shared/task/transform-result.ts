export interface TransformedFile {
	filename: string;
	oldFilename: string;
	text: string;
}

export interface TransformResult {
	files: TransformedFile[];
}
