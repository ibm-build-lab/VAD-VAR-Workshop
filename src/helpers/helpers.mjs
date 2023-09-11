/**
 * Simple helper to clean path string of any empty parts
 * @param {string} path - path to be cleansed
 * @returns {string} - cleansed path string
 */
const cleanPathString = (path) => {
  return path
    .split('/')
    .filter((p) => !!p && p !== '.')
    .join('/');
};

/**
 * Determines if a URL string is remote
 * @param {string} url - URL string to determine if it's remote/absolute
 * @returns {boolean}
 */
const isAbsoluteUrl = (url) => {
  const URL_REGEX = /^https:\/\//i;
  const tests = [URL_REGEX.test(url), url.startsWith('//')];
  return tests.some((b) => b);
};

/**
 * Determines if a URL string is relative
 * @param {string} url - URL string to determine if it's relative
 * @returns {boolean}
 */
const isRelativeUrl = (url) => !isAbsoluteUrl(url);

export { cleanPathString, isAbsoluteUrl, isRelativeUrl };
