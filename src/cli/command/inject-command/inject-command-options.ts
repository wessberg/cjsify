import {FileSystem} from "../../../shared/file-system/file-system.js";
import {CliProgram} from "../create-command/create-command-options.js";
import {TransformHooks} from "../../../shared/task/transform-task-options.js";

export interface InjectCommandOptions {
	program: CliProgram;
	fileSystem?: FileSystem;
	hooks?: Partial<TransformHooks>;
}
