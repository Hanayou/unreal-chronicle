import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Unreal Chronicle",
  tagline: "An adventurer’s handbook to Unreal Engine",
  favicon: "unreal-engine2.svg",

  // Set the production url of your site here
  url: "https://unreal-chronicle.hanayou.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Hanayou", // Usually your GitHub org/user name.
  projectName: "unreal-chronicle", // Usually your repo name.
  deploymentBranch: "gh-pages",
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
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Hanayou/unreal-chronicle",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: "og:title", content: "Unreal Chronicle" },
      {
        name: "og:description",
        content: "An adventurer’s handbook to Unreal Engine",
      },
      {
        name: "og:image",
        content: "https://unreal-chronicle.hanayou.dev/unreal-engine2.svg",
      },
      { name: "og:url", content: "https://unreal-chronicle.hanayou.dev" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Unreal Chronicle" },
      {
        name: "twitter:description",
        content: "An adventurer’s handbook to Unreal Engine",
      },
      {
        name: "twitter:image",
        content: "https://unreal-chronicle.hanayou.dev/unreal-engine2.svg",
      },
    ],

    // Replace with your project's social card
    image: "unreal-engine2.svg",
    navbar: {
      title: "Unreal Chronicle",
      logo: {
        alt: "Site Logo",
        src: "unreal-engine2.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "Guides",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          to: "/about",
          label: "About",
          position: "left",
        },
        {
          href: "https://youtube.com/@HanayouDev",
          label: "YouTube",
          position: "right",
        },
        {
          href: "https://github.com/Hanayou/unreal-chronicle",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learning",
          items: [
            {
              label: "Guides",
              to: "/docs/introduction",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "YouTube",
              href: "https://www.youtube.com/@HanayouDev",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hanayou. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
