import {TaskOptions} from "./task-options.js";
import {realReadonlyFileSystem} from "../file-system/file-system.js";
import {Logger} from "../logger/logger.js";
import {LogLevelKind} from "../logger/log-level-kind.js";

export function createTaskOptions({
	fileSystem = realReadonlyFileSystem,
	debug = false,
	cwd = process.cwd(),
	logger = new Logger(debug !== false ? LogLevelKind.DEBUG : LogLevelKind.NONE)
}: Partial<TaskOptions> = {}): TaskOptions {
	return {
		fileSystem,
		debug,
		cwd,
		logger
	};
}
