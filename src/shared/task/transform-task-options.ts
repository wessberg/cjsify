import {TaskOptions} from "./task-options";
import {FileSystem} from "../file-system/file-system";
import {MaybeArray} from "helpertypes";

export interface TransformHooks {
	/**
	 * If a string is returned from this hool, that text will be written to disk instead
	 */
	writeFile(filename: string, oldFilename: string, text: string): string | void;
}

export interface TransformTaskOptions extends TaskOptions {
	/**
	 * The input glob(s) to match against the file system
	 */
	input: MaybeArray<string>;

	/**
	 * The output directory to use. If not given, the source files will be overwritten
	 */
	outDir?: string;

	/**
	 * If write is false, no files will be written to disk
	 */
	write: boolean;

	/**
	 * The FileSystem to use. Useful if you want to work with a virtual file system. Defaults to using the "fs" module
	 */
	fileSystem: FileSystem;

	/**
	 * A collection of hooks into the transformation process
	 * that can be used for logging or altering the internal behavior
	 */
	hooks: Partial<TransformHooks>;
}
