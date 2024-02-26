// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Forum Promotion Help Centre",
  tagline: "Best Webmaster, Admin and Internet Marketing Forum",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://help.forumpromotion.net/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/help-centre/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Forum-Promotion", // Usually your GitHub org/user name.
  projectName: "help-centre", // Usually your repo name.
  deploymentBranch: "master",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "hhttps://github.com/Forum-Promotion/help-centre",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "hhttps://github.com/Forum-Promotion/help-centre",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Help Centre",
        logo: {
          alt: "Forum Promotion Logo",
          src: "img/xenforo-logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Getting Started",
          },
          {
            href: "https://github.com/Forum-Promotion/help-centre",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Welcome",
                to: "/docs/welcome",
              },
              {
                label: "Getting Started",
                to: "/docs/getting-started",
              },
              {
                label: "Help Guides",
                to: "/docs/help-guides",
              },
              {
                label: "Our Services",
                to: "/docs/our-services",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Community",
                href: "https://forumpromotion.net",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Forum-Promotion/help-centre",
              },
              {
                label: "Status",
                href: "https://status.forumpromotion.net",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Forum Promotion.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
