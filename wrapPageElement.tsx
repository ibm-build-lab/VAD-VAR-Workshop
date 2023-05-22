import React from 'react';
import { GatsbyBrowser, GatsbySSR } from 'gatsby';
import Layout from './src/components/Layout';
import './i18n';

type WrapPageElement = (GatsbyBrowser | GatsbySSR)['wrapPageElement'];

const wrapPageElement: WrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export default wrapPageElement;
