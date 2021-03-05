import { url2name } from "./utils.js";

test.each([
	[new URL("https://ru.hexlet.io/courses"), "ru-hexlet-io-courses"],
	[new URL("udp://ru.hexlet.io/courses/"), "ru-hexlet-io-courses"],
	[new URL("tcp://ru.hexlet.io/courses/1"), "ru-hexlet-io-courses-1"],
	[
		new URL("http://ru.hexlet.io/courses/?page=3"),
		"ru-hexlet-io-courses-page-3",
	],
])("transforms url %s to name %s", (url, name) => {
	expect(url2name(url)).toBe(name);
});
