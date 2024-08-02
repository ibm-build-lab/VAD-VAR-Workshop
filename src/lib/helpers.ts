import path from 'path';
import slugify from 'slugify';

const DEF_LOCALE = 'en';
const ABSOLUTE_URL_REGEX = new RegExp('^(?:[a-z+]+:)?//', 'i');
const URI_URL_REGEX = new RegExp('^([a-z]+:)(?!//)', 'i');

interface LocaleInfo {
  locale: string;
  name: string;
}

interface GenSlugOptions {
  def?: string;
  start?: number;
}

/**
 * determines if input URL is relative
 *
 * @param url
 * @returns {boolean} is URL relative
 */
export function isURLAbsolute(url: string): boolean {
  return ABSOLUTE_URL_REGEX.test(url) || URI_URL_REGEX.test(url);
}

/**
 * determines if input URL is absolute
 *
 * @param url
 * @returns {boolean} is URL absolute
 */
export function isURLRelative(url: string): boolean {
  return !isURLAbsolute(url);
}

/**
 * determines locale from input file name
 *
 * @param {string} n file name
 * @param {string=} def default locale
 *
 * @example <caption>Locale in name</caption>
 * // returns `es`
 * parseLocaleFromFileName('test.es.md')
 *
 * @example <caption>No locale in name</caption>
 * // returns `en`
 * parseLocaleFromFileName('test.md')
 *
 */
export function parseLocaleFromFileName(
  n: string,
  def: string = DEF_LOCALE
): LocaleInfo {
  const { name } = path.posix.parse(n);
  const split_name = name.split('.');

  if (split_name.length < 2) split_name.push(def);

  const locale = split_name.pop();

  if (!locale) throw `No locale found in ${name}`;

  return {
    name: split_name.join('.'),
    locale
  };
}

/**
 * determines locale from input file path
 *
 * @param {string} p file path
 * @param {string=} def default locale
 *
 * @example <caption>Locale in path</caption>
 * // returns `es`
 * parseLocaleFromFileName('path/to/file/test.es')
 *
 * @example <caption>No locale in path</caption>
 * // returns `en`
 * parseLocaleFromFileName('path/to/file/test')
 *
 */
export function parseLocaleFromFilePath(p: string, def: string = DEF_LOCALE) {
  return parseLocaleFromFileName(p, def);
}

/**
 * generate localized URL slug from file path
 *
 * @param p path to item
 * @param opts options
 * @returns localized slug string
 */
export function generateSlugFromPath(p: string, opts: GenSlugOptions = {}) {
  const { def = DEF_LOCALE, start = 0 } = opts;

  const { dir, base } = path.posix.parse(path.posix.normalize(p));
  const { name, locale } = parseLocaleFromFileName(base, def);
  const splitDir = dir.split('/').slice(start);
  const slug = [locale, ...splitDir, name]
    .map((i) => slugify(i, { lower: true }))
    .filter((n) => n && n !== 'readme' && n !== 'index')
    .join('/');
  return slug;
}

/**
 * safely split slug strings into array
 *
 * @param s slug string
 * @returns string array of items
 */
export function splitSlug(s: string) {
  return s.split('/').filter((n) => !!n);
}

/**
 * Formats time in minutes to hours and minutes string
 *
 *@example <caption>Under 1 hour</caption>
 * // returns `10min`
 * toHoursAndMinutes(10)
 *
 * @example <caption>Exactly 1 hour</caption>
 * // returns `1hr`
 * toHoursAndMinutes(60)
 *
 * @example <caption>More than 1 hour</caption>
 * // returns `1hr 10min`
 * toHoursAndMinutes(70)
 *
 * @param {number} totalMinutes
 * @returns {string} formatted time string
 */
export function toHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const formattedHours = hours > 0 ? `${hours} hr${hours > 1 ? 's' : ''}` : ``;
  const formattedMin = minutes > 0 ? `${minutes} min` : '';

  return `${formattedHours} ${formattedMin}`.trim();
}
