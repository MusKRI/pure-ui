// Custom theme that integrates with our Pure UI design system
// Minimal, subtle code highlighting inspired by modern code editors
export const pureUIShikiTheme = {
  name: "pure-ui-custom",
  bg: "var(--color-code)",
  fg: "var(--color-code-foreground)",
  settings: [
    // ======== Comments ========
    // Comments in muted, italicized
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: "var(--syntax-comment)",
        fontStyle: "italic",
      },
    },

    // ======== Keywords & Control Flow ========
    // Keywords - subtle, slightly muted
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.operator",
        "keyword.other.unit",
        "keyword.control.import",
        "keyword.control.export",
        "storage",
        "storage.type",
        "storage.modifier",
        "storage.type.class",
        "storage.type.function",
      ],
      settings: {
        foreground: "var(--syntax-keyword)",
      },
    },

    // ======== Strings ========
    // Strings in muted foreground
    {
      scope: [
        "string",
        "string.quoted",
        "string.single",
        "string.double",
        "string.template",
        "string.interpolated",
        "punctuation.definition.string",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "string punctuation.section.embedded source",
      ],
      settings: {
        foreground: "var(--syntax-string)",
      },
    },

    // ======== Numbers & Constants ========
    // Constants and numbers
    {
      scope: [
        "constant",
        "constant.numeric",
        "constant.character",
        "constant.language.boolean",
        "constant.language.null",
        "constant.language.undefined",
        "entity.name.constant",
        "variable.other.constant",
        "variable.other.enummember",
        "variable.language",
      ],
      settings: {
        foreground: "var(--syntax-constant)",
      },
    },

    // ======== Types & Functions ========
    // Entities - functions, types, classes
    {
      scope: [
        "entity.name",
        "entity.name.function",
        "entity.name.class",
        "entity.name.interface",
        "entity.name.type",
        "support.class",
        "support.type",
        "support.function",
        "meta.function-call",
      ],
      settings: {
        foreground: "var(--syntax-entity)",
      },
    },

    // ======== Tags (HTML/XML) ========
    // HTML/XML tags - slightly distinct
    {
      scope: [
        "entity.name.tag",
        "punctuation.definition.tag",
        "meta.tag",
        "meta.tag.tsx",
        "meta.tag.jsx",
        "support.class.component",
      ],
      settings: {
        foreground: "var(--syntax-tag)",
      },
    },

    // JSX/HTML attributes
    {
      scope: [
        "entity.other.attribute-name",
        "entity.other.attribute-name.js",
        "entity.other.attribute-name.jsx",
        "meta.tag.attributes",
        "meta.attribute",
      ],
      settings: {
        foreground: "var(--syntax-variable)",
      },
    },

    // ======== Variables & Parameters ========
    // Function parameters
    {
      scope: ["variable.parameter.function", "variable.parameter"],
      settings: {
        foreground: "var(--syntax-parameter)",
      },
    },

    // Regular variables
    {
      scope: [
        "variable",
        "variable.other",
        "variable.other.readwrite",
        "variable.other.property",
        "variable.other.object",
      ],
      settings: {
        foreground: "var(--syntax-variable)",
      },
    },

    // ======== Support & Built-ins ========
    // Built-ins inherit default to reduce color noise
    {
      scope: ["support", "support.constant", "support.variable", "meta.import"],
      settings: {
        foreground: "var(--syntax-default)",
      },
    },

    // ======== Properties ========
    // Object properties and metadata (align with variables)
    {
      scope: ["meta.property-name", "support.type.property-name"],
      settings: {
        foreground: "var(--syntax-variable)",
      },
    },

    // ======== Operators ========
    // Operators use default for minimal contrast
    {
      scope: ["keyword.operator"],
      settings: {
        foreground: "var(--syntax-default)",
      },
    },

    // ======== Punctuation ========
    // Brackets and delimiters
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote",
      ],
      settings: {
        foreground: "var(--syntax-bracket-highlight)",
      },
    },

    {
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: "var(--syntax-invalid)",
      },
    },

    // ======== Regular Expressions ========
    // Regex patterns
    {
      scope: ["source.regexp", "string.regexp"],
      settings: {
        foreground: "var(--syntax-string)",
      },
    },

    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition",
      ],
      settings: {
        foreground: "var(--syntax-string)",
      },
    },

    {
      scope: "string.regexp constant.character.escape",
      settings: {
        foreground: "var(--syntax-tag)",
      },
    },

    // ======== Markup/Markdown ========
    // Markdown headings
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      settings: {
        foreground: "var(--syntax-constant)",
        fontStyle: "bold",
      },
    },

    // Markdown quotes
    {
      scope: "markup.quote",
      settings: {
        foreground: "var(--syntax-tag)",
        fontStyle: "italic",
      },
    },

    // Markdown emphasis
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
        foreground: "var(--syntax-other)",
      },
    },

    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: "var(--syntax-other)",
      },
    },

    {
      scope: "markup.underline",
      settings: {
        fontStyle: "underline",
      },
    },

    {
      scope: "markup.strikethrough",
      settings: {
        fontStyle: "strikethrough",
      },
    },

    {
      scope: "markup.inline.raw",
      settings: {
        foreground: "var(--syntax-constant)",
      },
    },

    // ======== Diff Markup ========
    // Deleted content
    {
      scope: [
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted",
      ],
      settings: {
        background: "var(--syntax-deleted-background)",
        foreground: "var(--syntax-deleted-foreground)",
      },
    },

    // Inserted content
    {
      scope: [
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted",
      ],
      settings: {
        background: "var(--syntax-inserted-background)",
        foreground: "var(--syntax-inserted-foreground)",
      },
    },

    // Changed content
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
      settings: {
        background: "var(--syntax-changed-background)",
        foreground: "var(--syntax-changed-foreground)",
      },
    },

    // Untracked content
    {
      scope: ["markup.ignored", "markup.untracked"],
      settings: {
        background: "var(--syntax-untracked-background)",
        foreground: "var(--syntax-untracked-foreground)",
      },
    },

    // Diff headers
    {
      scope: "meta.diff.header",
      settings: {
        foreground: "var(--syntax-constant)",
      },
    },

    {
      scope: "meta.diff.range",
      settings: {
        foreground: "var(--syntax-entity)",
      },
    },

    {
      scope: "meta.separator",
      settings: {
        foreground: "var(--syntax-constant)",
      },
    },

    // ======== Invalid & Errors ========
    // Invalid syntax - error color
    {
      scope: [
        "invalid.broken",
        "invalid.deprecated",
        "invalid.illegal",
        "invalid.unimplemented",
      ],
      settings: {
        fontStyle: "italic",
        foreground: "var(--syntax-invalid)",
      },
    },

    {
      scope: "message.error",
      settings: {
        foreground: "var(--syntax-invalid)",
      },
    },

    // Carriage return indicator
    {
      scope: "carriage-return",
      settings: {
        fontStyle: "italic underline",
        background: "var(--syntax-carriage-return-background)",
        foreground: "var(--syntax-carriage-return-foreground)",
      },
    },

    // ======== Links ========
    // Link references
    {
      scope: ["constant.other.reference.link", "string.other.link"],
      settings: {
        fontStyle: "underline",
        foreground: "var(--syntax-string)",
      },
    },

    // ======== Other/Default ========
    // List punctuation in markdown
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "var(--syntax-variable)",
      },
    },

    // Default output styling
    {
      scope: "meta.output",
      settings: {
        foreground: "var(--syntax-constant)",
      },
    },
  ],
};
