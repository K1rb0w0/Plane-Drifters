import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Plane Drifters",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "es-ES",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Orbitron",
        body: "Roboto",
        code: "Share Tech Mono",
      },
      colors: {
        lightMode: {
          light: "#F0F8FF", // Alice Blue
          lightgray: "#D0D7DE", // Soft Gray
          gray: "#A9B2C3", // Muted Steel Blue
          darkgray: "#5A5A6E", // Charcoal Gray
          dark: "#283747", // Deep Space Blue
          secondary: "#1565C0", // Stronger Cosmic Blue for better readability
          tertiary: "#FF7F50", // Coral
          highlight: "#FFEB8A", // Slightly deeper Solar Yellow for more contrast
          textHighlight: "#FFFFFF", // Pure White for contrast
        },
        darkMode: {
          light: "#1C1C28", // Midnight Black
          lightgray: "#2E3440", // Nebula Gray
          gray: "#4C566A", // Asteroid Gray
          darkgray: "#D8DEE9", // Light Silver
          dark: "#ECEFF4", // Moonlight White
          secondary: "#81D4FA", // Brighter Aurora Blue for improved readability
          tertiary: "#70AFFF", // Comet Blue
          highlight: "#4C566A", // Muted Asteroid Gray to complement Aurora Blue
          textHighlight: "#1E1F26", // Subtle Dark for text highlight
        },                                
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
