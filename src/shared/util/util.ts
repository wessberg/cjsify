import path from "crosspath";
import {RELEVANT_EXTENSIONS} from "../constant/constant.js";

export interface RandomPathOptions {
	extension: string;
	prefix: string;
	suffix: string;
}
export function generateRandomPath({extension = "", prefix = "__#auto-generated-", suffix = String(Math.floor(Math.random() * 100000))}: Partial<RandomPathOptions> = {}) {
	return `${prefix}${suffix}${extension}`;
}

/**
 * Ensures that the given item is in fact an array
 */
export function ensureArray<T>(item: T | T[]): T[] {
	return Array.isArray(item) ? item : [item];
}

export function rewriteFilenamePath(root: string, filename: string, outDir?: string | undefined) {
	if (outDir == null) return path.normalize(filename);
	const {dir, base} = path.parse(filename);

	let relativeDirFromSrc = dir === "" ? path.join(path.relative(root, dir)) : path.join(path.relative(root, dir), "../");

	if (relativeDirFromSrc.startsWith("/")) {
		relativeDirFromSrc = relativeDirFromSrc.slice(1);
	}
	if (relativeDirFromSrc.startsWith("./")) {
		relativeDirFromSrc = relativeDirFromSrc.slice(2);
	}
	if (relativeDirFromSrc.includes("/")) {
		relativeDirFromSrc = relativeDirFromSrc.slice(relativeDirFromSrc.indexOf("/") + 1);
	} else {
		relativeDirFromSrc = ``;
	}
	return path.join(outDir, relativeDirFromSrc, base);
}

export function normalizeGlob(glob: string): string {
	return path.extname(glob) === "" && !glob.endsWith("*") ? `${glob}/*` : glob;
}

export function fileHasRelevantExtension(filename: string): boolean {
	return RELEVANT_EXTENSIONS.some(ext => filename.endsWith(ext));
}

export function getUpdatedExtension(filename: string): string {
	if (filename.endsWith(`.cjs.d.ts`)) {
		return filename.replace(`.cjs.d.ts`, `.d.cts`);
	} else if (filename.endsWith(`.cjs.d.ts.map`)) {
		return filename.replace(`.cjs.d.ts.map`, `.d.cts.map`);
	} else if (filename.endsWith(`.d.ts`)) {
		return filename.replace(`.d.ts`, `.d.cts`);
	} else if (filename.endsWith(`.d.ts.map`)) {
		return filename.replace(`.d.ts.map`, `.d.cts.map`);
	} else if (filename.endsWith(`.js.map`)) {
		return filename.replace(`.js.map`, `.cjs.map`);
	} else if (filename.endsWith(`.js`)) {
		return filename.replace(`.js`, `.cjs`);
	} else {
		return filename;
	}
}
