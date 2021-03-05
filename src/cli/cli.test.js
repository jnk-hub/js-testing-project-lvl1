import nock from "nock";
import cli from "./cli.js";

nock.disableNetConnect();

const url = "https://test.com";

test("sets output", async () => {
	const dir = "test-dir";
	const action = jest.fn(() => {});

	await cli(["node", "test", url, `--output=${dir}`], action);

	expect(action).toHaveBeenCalledWith(dir, url);
});

test("sets output to process.cwd() by default", async () => {
	const action = jest.fn(() => {});

	await cli(["node", "test", url], action);

	expect(action).toHaveBeenCalledWith(process.cwd(), url);
});
