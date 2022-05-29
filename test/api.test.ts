import test from "ava";
import {executeApi} from "./setup/execute-api.js";

test("Can transform one or more files via the API. #1", async t => {
	const bundle = await executeApi([
		{
			fileName: "index.js"
		}
	]);

	const {files} = bundle;
	const [file] = files;
	t.deepEqual(files.length, 1);
	t.true(file.filename.endsWith(`index.cjs`));
});

test("Can transform one or more files via the API. #2", async t => {
	const bundle = await executeApi([
		{
			fileName: "index.js"
		},
		{
			fileName: "index.js.map"
		},
		{
			fileName: "index.d.ts"
		},
		{
			fileName: "index.d.ts.map"
		}
	]);

	const {files} = bundle;
	const [file1, file2, file3, file4] = files;
	t.deepEqual(files.length, 4);
	t.true(file1.filename.endsWith(`index.cjs`));
	t.true(file2.filename.endsWith(`index.cjs.map`));
	t.true(file3.filename.endsWith(`index.d.cts`));
	t.true(file4.filename.endsWith(`index.d.cts.map`));
});
