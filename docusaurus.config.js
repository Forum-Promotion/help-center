// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Forum Promotion Help Center",
  tagline: "Best Webmaster, Admin and Internet Marketing Forum",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://help.forumpromotion.net/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Forum-Promotion", // Usually your GitHub org/user name.
  projectName: "help-center", // Usually your repo name.
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
          editUrl: "https://github.com/Forum-Promotion/help-center",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Forum-Promotion/help-center",
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
      image: "img/fp-social-card.png",
      navbar: {
        title: "Help Center",
        logo: {
          alt: "Forum Promotion Logo",
          src: "img/xenforo-logo.png",
        },
        items: [
          {
            to: "docs/welcome",
            position: "left",
            label: "Getting Started",
          },
          { to: "docs/account-help", label: "Account Help", position: "left" },
          { to: "docs/forum-help", label: "Forum Help", position: "left" },
          { to: "docs/our-services", label: "Our Services", position: "left" },
          {
            href: "https://github.com/Forum-Promotion/help-center",
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
                label: "Account Help",
                to: "/docs/account-help",
              },
              {
                label: "Forum Help",
                to: "/docs/forum-help",
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
              {
                label: "Community Slack",
                href: "https://join.slack.com/t/forumpromotio-i9s9207/shared_invite/zt-2qk5b6duu-U_SIShU4CB_xTbo47KU_kw",
              },
              {
                label: "Directory",
                href: "https://forumpromotion.net/directory/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Forum-Promotion/help-center",
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
