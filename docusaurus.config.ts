import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Shravan C',
  tagline: 'Seasoned Software Engineer',
  favicon: 'img/favicon.ico',
  plugins: ['docusaurus-plugin-sass'],
  // Set the production url of your site here
  url: 'https://mrshravan.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mrshravandev', // Usually your GitHub org/user name.
  projectName: 'mrshravandev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  customFields: {
    description: "Welcome to Shravan C's personal blog! Here, I share thoughts, insights, and musings on a variety of topics that spark my curiosity and might intrigue you too. Dive in and explore the ideas and reflections that cross my mind.",
    location: "Bangalore, India"
   },

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
          path: './projects',
          routeBasePath: '/projects',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/mrshravandev/project-x/tree/master',
        },
        blog: {
          routeBasePath: '/posts',
          path: './posts',
          blogSidebarCount: 0,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright ©2024-present. Some rights reserved. Built by Shravan, Hosted on Vercel`
        },
          editUrl:
            'https://github.com/mrshravandev/project-x/edit/master',
        },
        theme: {
          customCss: './src/global-styles/global.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: "Shravan's Blog",
      items: [
        {to: '/posts', label: 'Posts', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Projects',
        },
        {to: '/about', label: 'About', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {to: '/resume', label: 'Resume', position: 'left'},
        {
          href: "https://github.com/mrshravandev",
          position: "right",
          className: "header-github-link","aria-label": "GitHub repository",
        },
        {
          type: "search",
          position: "right",
        }
      ],
    },
    footer: {
      style: "light",
      links: [],
      copyright: `&copy; ${new Date().getFullYear()} Some rights reserved. Built by Shravan, Hosted on Vercel`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
