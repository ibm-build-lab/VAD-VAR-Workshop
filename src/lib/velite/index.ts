import 'server-only';

import collectBreadcrumbs from './collect-breadcrumbs';
import generateMap from './generate-map';
import generateSlugTree from './generate-tree';

const SLUG_TREE = generateSlugTree();
const SLUG_MAP = generateMap();

export { SLUG_MAP, SLUG_TREE, collectBreadcrumbs };
