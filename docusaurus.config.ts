import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Awesome prompts library',
  tagline: 'A Collection of AI Prompts for Developers',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://prompt.lecuong.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cuongtl1992', // Usually your GitHub org/user name.
  projectName: 'awesome-prompt', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    algolia: {
      appId: "YOUR_ALGOLIA_APP_ID",
      apiKey: "YOUR_ALGOLIA_API_KEY",
      indexName: "prompt-library",
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Awesome Prompt',
      logo: {
        alt: 'Awesome Prompt Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: "/docs/intro",
          label: "Prompt Library",
           position: "left"
        },
        {
          href: 'https://github.com/cuongtl1992/awesome-prompt',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Awesome Prompt. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
