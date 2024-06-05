import { truncate } from 'hast-util-truncate';

type Root = Parameters<typeof truncate>['0'];

export default function rehypeTruncate() {
  return function transformer(root: Root) {
    return truncate(root);
  };
}
