const { useConfig } = require("nextra-theme-docs");
const { useRouter } = require("next/router");
const React = require("react");

const themeConfig = {
  chat: {
    link: "https://discord.com/servers/easynode-pro-blockchain-validators-404423550909284372",
  },
  darkMode: true,
  docsRepositoryBase: "https://github.com/easy-node-pro/docs.easynode.pro",
  editLink: {
    text: "Edit this page on GitHub →",
  },
  faviconGlyph: "⚡",
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          ⚡{" "}
          <a href="https://EasyNode.PRO" target="_blank" rel="noreferrer">
            EasyNode.PRO
          </a>{" "}
          ⚡ Blockchain Docs - ©{new Date().getFullYear()}
        </div>
      </div>
    ),
  },
  logo: (
    <span className="mr-2 hidden font-extrabold md:inline">
      EasyNode.PRO ⚡ Blockchain Docs
    </span>
  ),
  navigation: {
    next: true,
    prev: true,
  },
  primaryHue: 121,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title }) {
      return <>{title}</>;
    },
  },
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    const { route } = useRouter();
    // ... (rest of the code remains unchanged)
  },
};

module.exports = themeConfig;
