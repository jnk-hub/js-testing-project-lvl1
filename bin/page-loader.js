#!/usr/bin/env node
import cli from "../src/cli/cli.js";

if (process.argv.length == 2) {
	process.argv.push("--help");
}

cli(process.argv);
