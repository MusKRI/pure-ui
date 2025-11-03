import type { ShikiTransformer } from "shiki";

const CLASSES = {
  lineAdd: "diff add",
  lineRemove: "diff remove",
  hasDiff: "has-diff",
};

/**
 * Parse line numbers from a string like "1,3,4-5,7-9"
 * Returns an array of line numbers (1-indexed)
 */
function parseLineNumbers(lineNumbersStr: string): number[] {
  if (!lineNumbersStr) return [];

  const result: number[] = [];

  // Split by commas
  const parts = lineNumbersStr.split(",");

  for (const part of parts) {
    const trimmedPart = part.trim();

    // Check if it's a range (e.g., "4-5")
    if (trimmedPart.includes("-")) {
      const [start, end] = trimmedPart
        .split("-")
        .map((n) => parseInt(n.trim(), 10));

      // Validate range
      if (isNaN(start) || isNaN(end)) continue;

      // Add all numbers in the range
      for (let i = start; i <= end; i++) result.push(i);
    }
    // Single line number
    else {
      const num = parseInt(trimmedPart, 10);
      if (!isNaN(num)) result.push(num);
    }
  }

  return result;
}

interface TransformerMetaLineDiffOptions {
  /**
   * Class for added lines
   * @default 'diff-add'
   */
  addClassName?: string;

  /**
   * Class for removed lines
   * @default 'diff-remove'
   */
  removeClassName?: string;

  /**
   * Class for the pre element when diff is present
   * @default 'has-diff'
   */
  hasDiffClassName?: string;
}

/**
 * Allow using `add=1,3,4-5 remove=9-11` in the code snippet meta to mark added and removed lines.
 *
 * Example:
 * ```js add=1,3,4-5 remove=9-11
 * // Code here
 * ```
 */
export function transformerMetaDiff(
  options: TransformerMetaLineDiffOptions = {}
): ShikiTransformer {
  const {
    addClassName = CLASSES.lineAdd,
    removeClassName = CLASSES.lineRemove,
    hasDiffClassName = CLASSES.hasDiff,
  } = options;

  return {
    name: "transformerMetaDiff",
    code(node) {
      // Extract add and remove parameters from meta
      const meta = this.options.meta?.__raw || "";

      // Parse add and remove parameters using regex
      // Match until a space or end of string
      const addMatch = meta.match(/add=([^ }]+)/);
      const removeMatch = meta.match(/remove=([^ }]+)/);

      // If neither parameter is present, do nothing
      if (!addMatch && !removeMatch) return;

      // Add the diff class to the pre element
      this.addClassToHast(this.pre, hasDiffClassName);

      // Parse line numbers
      const addLines = addMatch ? parseLineNumbers(addMatch[1]) : [];
      const removeLines = removeMatch ? parseLineNumbers(removeMatch[1]) : [];

      // Get all line elements
      const lines = node.children.filter((node) => node.type === "element");

      // Apply classes to lines
      lines.forEach((line, index) => {
        // Line numbers are 1-indexed in the parameters
        const lineNumber = index + 1;

        if (addLines.includes(lineNumber)) {
          this.addClassToHast(line, addClassName);
        }

        if (removeLines.includes(lineNumber)) {
          this.addClassToHast(line, removeClassName);
        }
      });
    },
  };
}
