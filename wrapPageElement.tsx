import React from 'react';
import Layout from './src/components/Layout';
import { GatsbyBrowser, GatsbySSR } from 'gatsby';
import './src/styles/globals.scss';

type WrapPageElement = (GatsbyBrowser | GatsbySSR)['wrapPageElement'];

const wrapPageElement: WrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export default wrapPageElement;
