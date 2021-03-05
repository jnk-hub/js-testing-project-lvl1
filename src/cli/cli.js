import { Command } from "commander";
import { loader } from "../page-loader/page-loader.js";

export default async (argv, action = loader) => {
	const cli = new Command("page-loader");
	cli.arguments("<url>")
		.option("-o, --output <path>", "path to output dir", process.cwd())
		.description("Loads page and saves it to file", {
			url: "load url",
		})
		.action(async (url) => {
			try {
				const path = await action(cli.output, url);
				path && console.log(path);
			} catch (err) {
				console.error(err.message);
			}
		});

	await cli.parseAsync(argv);
};
