import path from "path";
import os from "os";
import fs from "fs/promises";
import nock from "nock";
import { loader } from "./page-loader.js";

nock.disableNetConnect();

const url = "https://test.com";
let output;
beforeEach(async () => {
	output = await fs.mkdtemp(path.join(os.tmpdir(), "page-loader-"));
});

test("loads and writes ", async () => {
	const html = "🍄";

	nock(url).get(/.*/).reply(200, html);

	const filepath = await loader(output, url);
	const received = await fs.readFile(filepath, "utf-8");
	expect(received).toBe(html);
});

test("fails of invalid url", async () => {
	await expect(loader(output, "test.com")).rejects.toThrow("Invalid URL");
});

test("fails of invalid output dir", async () => {
	const invalidOutput = path.join(output, "nodir");

	nock(url).get(/.*/).reply(200);

	await expect(loader(invalidOutput, url)).rejects.toThrow(
		"no such file or directory"
	);
});
