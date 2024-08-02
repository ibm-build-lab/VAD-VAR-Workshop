import 'server-only';

import { Lab, labs } from '../../../.velite';

/**
 *
 * @returns
 */
export default function generateMap() {
  return labs.reduce(
    (acc, curr) => {
      acc[curr.slug] = curr;
      return acc;
***REMOVED***,
    {} as Record<string, Lab>
  );
}
