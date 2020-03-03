/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'Bunos',
  tagline: 'Foundation for your application',
  url: 'https://jmorlan.github.io',
  baseUrl: '/bunos/',
  favicon: 'img/favicon.ico',
  organizationName: 'jdmorlan', // Usually your GitHub org/user name.
  projectName: 'bunos', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Bunos',
      logo: {
        alt: 'Bunos',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/gateway/getting-started', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/jdmorlan/bunos',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jdmorlan/bunos',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com/',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} jdmorlan. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
