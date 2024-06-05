import { isURLAbsolute } from '#/lib/helpers';
import siteConfig from '#site-config';

const { owner, repo } = siteConfig;
const GIT_BASE_URL = 'https://raw.githubusercontent.com';

interface LoaderProps {
  src: string;
  width: string;
  quality: string;
}

/**
 * Handles prepending url with remote link if needed
 *
 * @returns {string} transformed image URL
 */
export default function gitImageLoader(props: LoaderProps) {
  const { src, width } = props;

  if (process.env.NODE_ENV === 'development' || isURLAbsolute(src)) return src;

  const baseURL = new URL(`/${owner}/${repo}/main`, GIT_BASE_URL).toString();
  return baseURL + src + `?w=${width}`;
}
