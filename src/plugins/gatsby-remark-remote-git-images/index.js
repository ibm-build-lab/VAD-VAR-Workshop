import { CONTINUE, visit } from 'unist-util-visit';
import { createFilePath } from 'gatsby-source-filesystem';
import { cleanPathString, isAbsoluteUrl } from '../../helpers/helpers.mjs';

const BASE_URL = 'https://raw.githubusercontent.com';

export default function gatsbyRemarkRemoteGitImages(
  { markdownAST, markdownNode, getNode },
  pluginOptions
) {
  const { user, repo, branch, pathPrefix } = pluginOptions;

  const relativeFilePath = createFilePath({
    node: markdownNode,
    getNode,
    trailingSlash: false
  });

  visit(
    markdownAST,
    (node) => {
      const { type, url } = node;
      return type === 'image' && !isAbsoluteUrl(url);
    },
    (node) => {
      const { url } = node;

      const cleanPath = cleanPathString(url);
      const cutPath = relativeFilePath.substring(
        relativeFilePath.indexOf('/') + 1,
        relativeFilePath.lastIndexOf('/')
      );

      const remoteURL = [BASE_URL, user, repo, branch, pathPrefix, cutPath, cleanPath].join('/');
      node.url = remoteURL;

      return CONTINUE;
    }
  );

  return markdownAST;
}
