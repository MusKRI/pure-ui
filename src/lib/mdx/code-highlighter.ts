import { codeToHtml } from "shiki";
import { transformerNotationHighlight } from "@shikijs/transformers";
import { pureUIShikiTheme } from "./shiki-theme";

// Language mapping for Shiki
const languageMap: Record<string, string> = {
  tsx: "tsx",
  jsx: "jsx",
  js: "javascript",
  ts: "typescript",
  css: "css",
  html: "html",
  json: "json",
  md: "markdown",
  markdown: "markdown",
  text: "text",
  txt: "text",
  shell: "bash",
  sh: "bash",
  bash: "bash",
  yaml: "yaml",
  yml: "yaml",
  xml: "xml",
  python: "python",
  py: "python",
  java: "java",
  cpp: "cpp",
  c: "c",
  go: "go",
  rust: "rust",
  php: "php",
  ruby: "ruby",
  swift: "swift",
  kotlin: "kotlin",
  scala: "scala",
  sql: "sql",
  dockerfile: "dockerfile",
  graphql: "graphql",
  vue: "vue",
  svelte: "svelte",
  astro: "astro",
};

export interface HighlightOptions {
  lang?: string;
  fileName?: string;
}

/**
 * Highlights code using Shiki with optional line highlighting
 * @param code - The code string to highlight
 * @param options - Highlighting options including language, meta for line highlighting, and fileName
 * @returns Promise<string> - The highlighted HTML string
 */
export async function highlightCode(
  code: string,
  options: HighlightOptions = {}
) {
  const { lang = "text", fileName } = options;

  if (!code.trim() || lang === "text") {
    return code;
  }

  // Map language to Shiki-supported language
  const mappedLanguage = languageMap[lang.toLowerCase()] || lang;

  try {
    let html: string;

    // Use transformers for line highlighting if meta is provided
    html = await codeToHtml(code, {
      lang: mappedLanguage,
      theme: pureUIShikiTheme as any,
      // themes: {
      //   dark: "vesper",
      //   light: "catppuccin-latte",
      // },
      // theme: "vitesse-dark",
      transformers: [transformerNotationHighlight()],
    });

    return html;
  } catch (error) {
    console.error(`Failed to highlight code for language ${lang}:`, error);
    // Return original code if highlighting fails
    return code;
  }
}

/**
 * Extract language from file extension
 * @param fileName - The name of the file
 * @returns string - The detected language
 */
export function detectLanguageFromFileName(fileName: string): string {
  if (!fileName) return "text";

  const extension = fileName.split(".").pop()?.toLowerCase();

  const extensionMap: Record<string, string> = {
    tsx: "tsx",
    jsx: "jsx",
    ts: "typescript",
    js: "javascript",
    css: "css",
    scss: "scss",
    sass: "sass",
    less: "less",
    html: "html",
    htm: "html",
    json: "json",
    md: "markdown",
    mdx: "markdown",
    yaml: "yaml",
    yml: "yaml",
    xml: "xml",
    py: "python",
    java: "java",
    cpp: "cpp",
    c: "c",
    go: "go",
    rs: "rust",
    php: "php",
    rb: "ruby",
    swift: "swift",
    kt: "kotlin",
    scala: "scala",
    sql: "sql",
    sh: "bash",
    bash: "bash",
    zsh: "bash",
    dockerfile: "dockerfile",
    graphql: "graphql",
    gql: "graphql",
    vue: "vue",
    svelte: "svelte",
    astro: "astro",
  };

  return extensionMap[extension || ""] || "text";
}
