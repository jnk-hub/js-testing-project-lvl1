/**
 * URL
 * @typedef {Object} URL
 * @prop {string} hostname
 * @prop {string} pathname
 * @prop {string} search
 */

/**
 * Transforms url to name
 * @param {URL} url
 * @returns {string} name
 */
export const url2name = (url) =>
	url.hostname.replace(/\./g, "-") +
	url.pathname.replace(/\/$/, "").replace(/\//g, "-") +
	url.search.replace(/[^\w]/g, "-");
