import fs from "fs/promises";
import path from "path";
import axios from "axios";
import { url2name } from "../utils/utils.js";

/**
 * @param {string} output
 * @param {string} url
 */
export const loader = async (output, url) => {
	const urlObj = new URL(url);
	const { data } = await axios.get(url);
	const filepath = path.join(output, `${url2name(urlObj)}.html`);
	await fs.writeFile(filepath, data);
	return filepath;
};
