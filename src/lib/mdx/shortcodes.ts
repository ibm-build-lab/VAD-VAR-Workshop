import 'server-only';

import dynamic from 'next/dynamic';
import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import { createElement } from 'react';
import {
  NavTile,
  TileGrid,
  FragmentLoader,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  Accordion,
  AccordionItem,
  CopyText
} from '#/components/custom';
import {
  TableHead,
  TableBody,
  TableHeadData,
  TableData,
  TableRow,
  UnorderedList,
  OrderedList,
  ListItem,
  BlockQuote,
  Link,
  CodeBlock,
  Image,
  Table,
  QuizAlert,
  Warning,
  Danger,
  Heading,
  Persona,
  Callout
} from '#/components/shortcodes';

type ComponentMap = MDXRemoteProps['components'];
type CustomComp = keyof typeof import('#/components/custom');

const LazyComp = (code: CustomComp) =>
  dynamic<any>(() =>
    import('#/components/custom/index').then((mod) => mod[code])
  );

const shortcodes: ComponentMap = {
  blockquote: BlockQuote,
  a: Link,
  code: CodeBlock,
  img: Image,
  // heading elements
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  h6: Heading.H6,
  // list elements
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  // table elements
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  th: TableHeadData,
  td: TableData,
  tr: TableRow,
  // custom elements
  QuizAlert: QuizAlert,
  Warning: Warning,
  Danger: Danger,
  Persona: Persona,
  Callout: Callout,
  TokenizationApplet: LazyComp('TokenizationApplet'),
  NavTile: NavTile,
  TileGrid: TileGrid,
  WatsonxResources: () =>
    createElement(FragmentLoader, { name: 'fragment-test' }),
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  CopyText
};

export default shortcodes;
