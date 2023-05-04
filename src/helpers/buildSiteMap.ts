import useAllMDXNodes from '../hooks/useAllMDXNodes';

interface SlugItem {
  slug: string;
  title: string;
  locale: string;
}

export interface MenuItem {
  name: string;
  slug: string;
  root: string;
  children: MenuItem[];
}

// recursive insert pass by reference
const insertNested = (array: MenuItem[], splitPath: string[], curr: SlugItem) => {
  let index = array.findIndex((item) => item.root === splitPath[0]);
  if (index < 0) {
    // insert in-place
    array.splice(array.length, 0, {
      name: curr.title,
      slug: `/${curr.slug}`,
      children: [],
      root: splitPath[0]
***REMOVED***);
    index = array.length - 1;
  }

  splitPath.shift();
  if (splitPath.length > 0) insertNested(array[index].children, splitPath, curr);
};

// build site map tree
const buildSiteMap = () => {
  const nodes = useAllMDXNodes();

  const slugList: SlugItem[] = nodes
    .map(({ fields, tableOfContents, frontmatter }) => ({
      slug: fields.slug,
      locale: fields.slug.split('/')[0],
      title:
        frontmatter?.title || (tableOfContents?.items && tableOfContents?.items[0]?.title) || ''
***REMOVED***))
    .filter(({ slug }) => !!slug)
    .sort((a, b) => a.slug.localeCompare(b.slug));

  if (slugList.length == 0) return [];

  return slugList.reduce((acc, curr) => {
    const { slug } = curr;
    const splitSlug = slug.split('/').filter((s: string) => !!s);
    insertNested(acc, splitSlug, curr);
    return acc;
  }, []) as MenuItem[];
};

export default buildSiteMap;
