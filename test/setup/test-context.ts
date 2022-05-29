import {isInDebugMode} from "../util/is-in-debug-mode.js";
import {TransformTaskOptions} from "../../src/shared/task/transform-task-options.js";
import {PartialExcept} from "helpertypes";

export interface TestContext extends PartialExcept<TransformTaskOptions, "cwd"> {}

export function createTestContext({debug = isInDebugMode(), cwd = process.cwd()}: PartialExcept<TestContext, never> = {}): TestContext {
	return {
		debug,
		cwd
	};
}
