import {ReadonlyFileSystem} from "../file-system/file-system.js";
import {Loggable} from "../logger/loggable.js";

export interface TaskOptions {
	/**
	 * A logger that can print messages of varying severity depending on the log level
	 */
	logger: Loggable;

	/**
	 * The FileSystem to use. Useful if you want to work with a virtual file system. Defaults to using the "fs" module
	 */
	fileSystem: ReadonlyFileSystem;

	/**
	 * The base directory (defaults to process.cwd())
	 */
	cwd: string;

	/**
	 * If true, debug information will be printed
	 */
	debug: boolean;
}
