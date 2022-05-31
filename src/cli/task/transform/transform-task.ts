import {TransformTaskOptions} from "../../../shared/task/transform-task-options.js";
import {inspect} from "util";
import fastGlob from "fast-glob";
import {TransformResult} from "../../../shared/task/transform-result.js";
import {ensureArray, fileHasRelevantExtension, getUpdatedExtension, normalizeGlob, rewriteFilenamePath} from "../../../shared/util/util.js";
import path from "crosspath";
import color from "ansi-colors";
/**
 * Executes the 'generate' task
 */
export async function transformTask(options: TransformTaskOptions): Promise<TransformResult> {
	const {logger, input, cwd, outDir, fileSystem, write, debug, hooks} = options;

	logger.debug(
		"Options:",
		inspect(
			{input, outDir, cwd, write, debug},
			{
				colors: true,
				depth: Infinity,
				maxArrayLength: Infinity
			}
		)
	);

	// Match files based on the glob(s)
	const matchedFiles = new Set(
		ensureArray(input)
			.flatMap(glob => fastGlob.sync(normalizeGlob(path.normalize(glob)), {fs: fileSystem}).map(file => (path.isAbsolute(file) ? path.normalize(file) : path.join(cwd, file))))
			.filter(fileHasRelevantExtension)
	);

	logger.debug(`Matched files:`, matchedFiles.size < 1 ? "(none)" : [...matchedFiles].map(f => `"${path.native.normalize(f)}"`).join(", "));

	// Prepare the result object
	const result: TransformResult = {
		files: []
	};

	for (const filename of matchedFiles) {
		const nativeNormalizedFileName = path.native.normalize(filename);
		const text = fileSystem.readFileSync(nativeNormalizedFileName, "utf8");

		let newFilename = rewriteFilenamePath(cwd, getUpdatedExtension(filename), outDir);

		// If a hook was provided, call it
		if (hooks.writeFile != null) {
			const hookResult = hooks.writeFile(newFilename, filename, text);
			if (hookResult != null) {
				newFilename = hookResult;
			}
		}

		result.files.push({filename: newFilename, oldFilename: filename, text});

		// Only write files to disk if requested
		if (write) {
			if (path.dirname(newFilename) === path.dirname(filename)) {
				fileSystem.renameSync(path.native.normalize(filename), path.native.normalize(newFilename));
			} else {
				fileSystem.mkdirSync(path.native.dirname(newFilename), {recursive: true});
				fileSystem.copyFileSync(path.native.normalize(filename), path.native.normalize(newFilename));
			}
			
			
		}
		logger.info(`${color.green("✔")} ${path.native.relative(cwd, path.native.normalize(newFilename))}`);
	}

	return result;
}
