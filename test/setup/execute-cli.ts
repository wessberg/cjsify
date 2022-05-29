import {TestFile} from "./test-file.js";
import {TestContext} from "./test-context.js";
import {createTestSetup} from "./test-setup.js";
import {configureCommands} from "../../src/cli/configure-commands.js";
import {createTestResult, TestResult} from "./test-result.js";
import {MaybeArray, PartialExcept} from "helpertypes";
import path from "crosspath";
import {TaskOptions} from "../../src/shared/task/task-options.js";

export interface CliTestContext extends TestContext {
	args: string[];
	files: MaybeArray<TestFile>;
	noForcedOutDir: boolean;
}

function shouldDebug(debug: TaskOptions["debug"]): boolean {
	if (debug == null) return false;
	return debug === true;
}

/**
 * Prepares a test via the CLI
 */
export async function executeCli(options: PartialExcept<CliTestContext, never>): Promise<TestResult> {
	const {
		fileSystem,
		fileStructure: {dir}
	} = createTestSetup(options.files ?? [], options);

	const args = options.args == null || options.args.length < 1 ? [] : [path.relative(dir.root, path.join(dir.src, options.args[0])), ...options.args.slice(1)];
	const result = createTestResult(dir);

	configureCommands({
		fileSystem,
		keepAliveOnError: true,
		args: [
			`/usr/local/bin/node`,
			"cjstoesm",
			...args,
			...(options.noForcedOutDir ?? false ? [] : [path.relative(dir.root, dir.dist)]),
			"--dry",
			`--cwd=${dir.root}`,
			...(shouldDebug(options.debug ?? false) ? ["--debug"] : [])
		],
		hooks: {
			writeFile(filename: string, oldFilename: string, text: string) {
				result.files.push({filename, oldFilename, text});
			}
		}
	});

	// Wait two microtasks
	for (let i = 0; i < 2; i++) {
		await Promise.resolve().then();
	}

	return result;
}
