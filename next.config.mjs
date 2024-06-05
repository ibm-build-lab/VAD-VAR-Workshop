// import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import createNextIntlPlugin from 'next-intl/plugin';

const { NEXT_PUBLIC_BASE_PATH, LOCAL_IMAGES } = process.env;

const USE_LOCAL_IMAGES = LOCAL_IMAGES === 'true';

const __dirname = dirname(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin('./i18n.config.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: NEXT_PUBLIC_BASE_PATH,
  output: 'export',
  images: !USE_LOCAL_IMAGES
    ? {
        loader: 'custom',
        loaderFile: './src/lib/image-loader.ts'
      }
    : {
        unoptimized: true
      },
  webpack: (config) => {
    // for tokenization applet
    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      'onnxruntime-node$': false
    };

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
    prependData: (content, loaderContext) => {
      const { resourcePath, rootContext } = loaderContext;
      const relativePath = path.relative(rootContext, resourcePath);

      let list = [`@use 'src/styles/resources'`];
      if (relativePath.endsWith('.module.scss')) {
        list = list.concat([
          `@use 'src/styles/theme' as themes`,
          `@use '@carbon/colors'`,
          `@use '@carbon/layout'`,
          `@use '@carbon/type'`
        ]);
      }

      const imports = [...list, ''].join(';\n');
      return imports.trim() + content;
    },
    logger: {
      warn: function (message) {
        console.warn(message);
      },
      debug: function (message) {
        console.log(message);
      }
    }
  }
};

export default withNextIntl(nextConfig);
