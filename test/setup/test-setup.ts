import {createTestContext, TestContext} from "./test-context.js";
import {FileSystem} from "../../src/shared/file-system/file-system.js";
import {createTestFileStructure, TestFile, TestFileStructure} from "./test-file.js";
import {createVirtualFileSystem} from "./create-virtual-file-system.js";
import {MaybeArray, PartialExcept} from "helpertypes";

export interface TestSetup {
	context: TestContext;
	fileSystem: FileSystem;
	fileStructure: TestFileStructure;
}

export function createTestSetup(inputFiles: MaybeArray<TestFile>, options?: PartialExcept<TestContext, never>): TestSetup {
	const context = createTestContext(options);
	const fileStructure = createTestFileStructure(inputFiles, context);
	const fileSystem = createVirtualFileSystem(fileStructure.files);

	return {
		context,
		fileStructure,
		fileSystem
	};
}
