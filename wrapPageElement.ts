
import React from "react";
import Layout from './src/components/Layout';
import { GatsbyBrowser, GatsbySSR } from "gatsby";

type WrapPageElement = (GatsbyBrowser | GatsbySSR)['wrapPageElement'];

const wrapPageElement: WrapPageElement = ({ element, props }) => {
    return React.createElement(Layout, {...props}, element);
}

export default wrapPageElement;