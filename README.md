<!-- SHADOW_SECTION_LOGO_START -->

<div><img alt="Logo" src="https://raw.githubusercontent.com/wessberg/cjsify/master/documentation/asset/logo.png" height="150"   /></div>

<!-- SHADOW_SECTION_LOGO_END -->

<!-- SHADOW_SECTION_DESCRIPTION_SHORT_START -->

> A tool that converts file extensions such as .js or .d.ts to their .cjs and .d.cts counterparts

<!-- SHADOW_SECTION_DESCRIPTION_SHORT_END -->

<!-- SHADOW_SECTION_BADGES_START -->

<a href="https://npmcharts.com/compare/cjsify?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/cjsify.svg"    /></a>
<a href="https://www.npmjs.com/package/cjsify"><img alt="NPM version" src="https://badge.fury.io/js/cjsify.svg"    /></a>
<img alt="Dependencies" src="https://img.shields.io/librariesio/github/wessberg%2Fcjsify.svg"    />
<a href="https://github.com/wessberg/cjsify/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/wessberg%2Fcjsify.svg"    /></a>
<a href="https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"    /></a>
<a href="https://opensource.org/licenses/MIT"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"    /></a>
<a href="https://www.patreon.com/bePatron?u=11315442"><img alt="Support on Patreon" src="https://img.shields.io/badge/patreon-donate-green.svg"    /></a>

<!-- SHADOW_SECTION_BADGES_END -->

<!-- SHADOW_SECTION_DESCRIPTION_LONG_START -->

## Description

<!-- SHADOW_SECTION_DESCRIPTION_LONG_END -->

This is a little tool that simply converts the extensions of filenames such as `.js` to `.cjs`, `.js.map` to `.cts.map`, `.d.ts` to `.d.cts`, and `.d.ts.map` to `.d.cts.map`. You might find value in it as part of your build step.

<!-- SHADOW_SECTION_FEATURES_START -->

### Features

<!-- SHADOW_SECTION_FEATURES_END -->

- Converts `.js` to `.cjs`, `.js.map` to `.cts.map`, `.d.ts` to `.d.cts`, and `.d.ts.map` to `.d.cts.map`.
- Can be used as a CLI
- Can be used programmatically as a library
- Is an ESM package with a CommonJS fallback, so you can use it in both types of codebases.

<!-- SHADOW_SECTION_FEATURE_IMAGE_START -->

<!-- SHADOW_SECTION_FEATURE_IMAGE_END -->

<!-- SHADOW_SECTION_BACKERS_START -->

## Backers

| <a href="https://usebubbles.com"><img alt="Bubbles" src="https://uploads-ssl.webflow.com/5d682047c28b217055606673/5e5360be16879c1d0dca6514_icon-thin-128x128%402x.png" height="70"   /></a> | <a href="https://github.com/cblanc"><img alt="Christopher Blanchard" src="https://avatars0.githubusercontent.com/u/2160685?s=400&v=4" height="70"   /></a> | <a href="https://github.com/ideal-postcodes"><img alt="Ideal Postcodes" src="https://avatars.githubusercontent.com/u/4996310?s=200&v=4" height="70"   /></a> | <a href="https://www.xerox.com"><img alt="Xerox" src="https://avatars.githubusercontent.com/u/9158512?s=200&v=4" height="70"   /></a> | <a href="https://changelog.me"><img alt="Trent Raymond" src="https://avatars.githubusercontent.com/u/1509616?v=4" height="70"   /></a> | <a href="https://scrubtheweb.com"><img alt="scrubtheweb" src="https://avatars.githubusercontent.com/u/41668218?v=4" height="70"   /></a> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [Bubbles](https://usebubbles.com)<br><strong>Twitter</strong>: [@usebubbles](https://twitter.com/usebubbles)                                                                                | [Christopher Blanchard](https://github.com/cblanc)                                                                                                         | [Ideal Postcodes](https://github.com/ideal-postcodes)                                                                                                        | [Xerox](https://www.xerox.com)                                                                                                        | [Trent Raymond](https://changelog.me)                                                                                                  | [scrubtheweb](https://scrubtheweb.com)                                                                                                   |

### Patreon

<a href="https://www.patreon.com/bePatron?u=11315442"><img alt="Patrons on Patreon" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dwessberg%26type%3Dpatrons"  width="200"  /></a>

<!-- SHADOW_SECTION_BACKERS_END -->

<!-- SHADOW_SECTION_TOC_START -->

## Table of Contents

- [Description](#description)
  - [Features](#features)
- [Backers](#backers)
  - [Patreon](#patreon)
- [Table of Contents](#table-of-contents)
- [Install](#install)
  - [npm](#npm)
  - [Yarn](#yarn)
  - [pnpm](#pnpm)
  - [Run once with npx](#run-once-with-npx)
- [Usage](#usage)
- [Contributing](#contributing)
- [Maintainers](#maintainers)
- [FAQ](#faq)
- [License](#license)

<!-- SHADOW_SECTION_TOC_END -->

<!-- SHADOW_SECTION_INSTALL_START -->

## Install

### npm

```
$ npm install cjsify
```

### Yarn

```
$ yarn add cjsify
```

### pnpm

```
$ pnpm add cjsify
```

### Run once with npx

```
$ npx cjsify
```

<!-- SHADOW_SECTION_INSTALL_END -->

<!-- SHADOW_SECTION_USAGE_START -->

## Usage

<!-- SHADOW_SECTION_USAGE_END -->

`cjsify` can be used in a variety of ways. The most straightforward usage is directly from the CLI:

### CLI usage

You can use this library as a CLI to convert the extensions of files matching an input glob.

The following command renames all files ending with `.js`, `.js.map`, `.d.ts`, and `.d.ts.map` matched by the glob `**/*.*` to their respective `.cjs` counterparts:

```
cjsify **/*.*
```

You can also pass in second argument, `outDir`, to copy them to a different directory:

```
cjsify dist/** dist/cjs
```

Here's an overview of the options that can be passed via the CLI:

```
$ cjsify --help
Usage: cjsify transform [options] <input> [outDir]

Cconverts file extensions such as .js or .d.ts to their .cjs and .d.cts counterparts based on the input glob

Options:
  -d, --debug [arg]    Whether to print debug information
  -v, --verbose [arg]  Whether to print verbose information
  -s, --silent [arg]   Whether to not print anything
  -c, --cwd [arg]      Optionally which directory to use as the current working directory
  -m, --dry [arg]      If true, no files will be written to disk
  -h, --help           display help for command
```

You can also just run `cjstoesm without explicitly passing in the `transform` command, as the CLI defaults to executing that command.

### API Usage

You can also use this library programmatically:

```ts
import {transform} from "cjsify";

await transform({
	input: "src/**/*.*"
});
```

Alternatively, if you don't want the transform function to automatically write files to disk, you can pass `write: false` as an option and handle it yourself:

```ts
import {transform} from "cjsify";
import fs from "fs";

const result = await transform({
	input: "src/**/*.*",
	write: false
});

// Write to disk
for (const {filename, oldFilename, text} of result.files) {
	fs.copyFileSync(oldFilename, filename);
}
```

#### API options

```typescript
interface TransformOptions {
	/**
	 * The input glob(s) to match against the file system
	 */
	input: string[] | string;
	/**
	 * The output directory to use. If not given, the source files will be overwritten
	 */
	outDir?: string;
	/**
	 * If write is false, no files will be written to disk
	 */
	write?: boolean;
	/**
	 * The FileSystem to use. Useful if you want to work with a virtual file system. Defaults to using the "fs" module
	 */
	fileSystem?: FileSystem;
	/**
	 * A logger that can print messages of varying severity depending on the log level
	 */
	logger?: Loggable;
	/**
	 * The base directory (defaults to process.cwd())
	 */
	cwd?: string;

	/**
	 * If true, debug information will be printed. If a function is provided, it will be invoked for each file name. Returning true from the function
	 * determines that debug information will be printed related to that file
	 */
	debug?: boolean;
}
```

<!-- SHADOW_SECTION_CONTRIBUTING_START -->

## Contributing

Do you want to contribute? Awesome! Please follow [these recommendations](./CONTRIBUTING.md).

<!-- SHADOW_SECTION_CONTRIBUTING_END -->

<!-- SHADOW_SECTION_MAINTAINERS_START -->

## Maintainers

| <a href="mailto:frederikwessberg@hotmail.com"><img alt="Frederik Wessberg" src="https://avatars2.githubusercontent.com/u/20454213?s=460&v=4" height="70"   /></a>                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Frederik Wessberg](mailto:frederikwessberg@hotmail.com)<br><strong>Twitter</strong>: [@FredWessberg](https://twitter.com/FredWessberg)<br><strong>Github</strong>: [@wessberg](https://github.com/wessberg)<br>_Lead Developer_ |

<!-- SHADOW_SECTION_MAINTAINERS_END -->

<!-- SHADOW_SECTION_FAQ_START -->

## FAQ

<!-- SHADOW_SECTION_FAQ_END -->

<!-- SHADOW_SECTION_LICENSE_START -->

## License

MIT © [Frederik Wessberg](mailto:frederikwessberg@hotmail.com) ([@FredWessberg](https://twitter.com/FredWessberg)) ([Website](https://github.com/wessberg))

<!-- SHADOW_SECTION_LICENSE_END -->
