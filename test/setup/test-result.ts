import {TransformedFile} from "../../src/shared/task/transform-result.js";
import {TestFileDirectories} from "./test-file.js";
import path from "crosspath";
import {rewriteFilenamePath} from "../../src/shared/util/util.js";

export interface TestResult {
	files: TransformedFile[];
	findFile: (filename: string) => TransformedFile | undefined;
}

export function createTestResult(dir: TestFileDirectories, files: TransformedFile[] = []): TestResult {
	const findFile = (filename: string): TransformedFile | undefined => {
		const distFile = rewriteFilenamePath(dir.root, filename, dir.dist);
		return files.find(file => path.normalize(file.filename) === path.normalize(filename) || path.normalize(file.filename) === distFile);
	};

	return {
		files,
		findFile
	};
}
