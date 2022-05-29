import test from "ava";
import {CommanderError} from "commander";
import {executeCli} from "./setup/execute-cli.js";

test.serial("Will throw if no 'input' argument is given. #1", async t => {
	await t.throwsAsync(executeCli({noForcedOutDir: true}), {
		instanceOf: CommanderError,
		code: "commander.missingArgument",
		message: `error: missing required argument 'input'`
	});
});

test.serial("Will match a file called 'index.js' with input argument: index.js. #1", async t => {
	const result = await executeCli({
		files: [
			{
				fileName: "index.js"
			}
		],
		args: ["index.js"]
	});

	t.true(result.findFile("index.cjs") != null);
});

test.serial("Will match a file called 'index.js' with input argument: index.js. #2", async t => {
	const result = await executeCli({
		files: [
			{
				fileName: "foo/index.js"
			}
		],
		args: ["**/index.js"]
	});

	t.true(result.findFile("foo/index.cjs") != null);
});

test.serial("Will match a file called 'index.js' with input argument: **.js. #1", async t => {
	const result = await executeCli({
		files: [
			{
				fileName: "index.js"
			}
		],
		args: ["**.js"]
	});

	t.true(result.findFile("index.cjs") != null);
});
