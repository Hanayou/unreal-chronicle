import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Unreal Chronicle",
  tagline: "An adventurer’s handbook to Unreal Engine",
  favicon: "img/unreal-engine-logo.svg",

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
          editUrl: "https://github.com/Hanayou/unreal-chronicle/tree/main",
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

  scripts: [
    {
      src: "https://cloud.umami.is/script.js",
      async: true,
      "data-website-id": "4f4c8f4c-54ee-4b96-9c4b-01129acaa7e5",
    },
  ],
  plugins: ["plugin-image-zoom"],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { property: "og:title", content: "Unreal Chronicle" },
      {
        property: "og:description",
        content: "An adventurer’s handbook to Unreal Engine",
      },
      {
        property: "og:image",
        content:
          "https://unreal-chronicle.hanayou.dev/img/open-graph-thumbnail.png",
      },
      { property: "og:url", content: "https://unreal-chronicle.hanayou.dev" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Unreal Chronicle" },
      {
        name: "twitter:description",
        content: "An adventurer’s handbook to Unreal Engine",
      },
      {
        name: "twitter:image",
        content:
          "https://unreal-chronicle.hanayou.dev/img/open-graph-thumbnail.png",
      },
    ],

    // Replace with your project's social card
    image: "img/unreal-engine-logo.svg",
    navbar: {
      title: "Unreal Chronicle",
      logo: {
        alt: "Site Logo",
        src: "img/unreal-engine-logo.svg",
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
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: ".markdown img",
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        background: "transparent",
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
