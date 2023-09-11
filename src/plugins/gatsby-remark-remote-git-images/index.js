import { CONTINUE, visit } from 'unist-util-visit';
import { createFilePath } from 'gatsby-source-filesystem';
import { cleanPathString, isRelativeUrl } from '../../helpers/helpers.mjs';

const BASE_URL = 'https://raw.githubusercontent.com';

export default function gatsbyRemarkRemoteGitImages(
  { markdownAST, markdownNode, getNode },
  pluginOptions
) {
  const { user, repo, branch, pathPrefix } = pluginOptions;

  const basePathArr = [user, repo, branch, pathPrefix];
  const folderPathArr = createFilePath({
    node: markdownNode,
    getNode,
    trailingSlash: false
  })
    .split('/')
    .slice(0, -1);

  const startingPathArr = basePathArr.concat(folderPathArr);

  visit(
    markdownAST,
    (node) => {
      const { type, url } = node;
      return type === 'image' && isRelativeUrl(url);
    },
    (node) => {
      const { url: imagePath } = node;

      // build full path and march through to handle paths referencing parent directory
      node.url = [BASE_URL]
        .concat(
          cleanPathString(imagePath)
            .split('/')
            .reduce(
              (acc, curr) => (curr !== '..' ? acc.concat(curr) : acc.slice(0, -1)),
              startingPathArr
            )
        )
        .join('/');

      return CONTINUE;
    }
  );

  return markdownAST;
}
