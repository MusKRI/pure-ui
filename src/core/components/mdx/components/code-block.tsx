import React from "react";
import { highlightCode } from "@/lib/mdx/code-highlighter";
import { cn } from "@/lib/classes";

interface CodeBlockProps extends React.ComponentProps<"pre"> {
  children?: React.ReactNode;
}

interface CodeElementProps extends React.ComponentProps<"code"> {
  className?: string;
}

// Extract language from className like "language-tsx" or "lang-tsx"
function extractLanguage(className?: string): string {
  if (!className) return "text";

  const langMatch = className.match(/language-(\w+)|lang-(\w+)/);
  return langMatch ? langMatch[1] || langMatch[2] : "text";
}

// Custom code element that handles highlighting (Server Component)
export async function CodeElement({
  className,
  children,
  ...props
}: CodeElementProps) {
  const language = extractLanguage(className);
  const codeString = React.Children.toArray(children).join("");

  // Only apply syntax highlighting for code blocks with language
  if (!language || language === "text" || !codeString.trim()) {
    return (
      <code
        className={cn(
          "PureInlineCode relative border border-border rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  }

  try {
    const highlightedCode = await highlightCode(codeString, { lang: language });

    return (
      <code
        className={cn("PureCodeBlock block font-mono text-sm", className)}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
        {...props}
      />
    );
  } catch (error) {
    console.error("Failed to highlight code:", error);
    // Fallback to non-highlighted code
    return (
      <code
        className={cn(
          "PureCodeBlock block font-mono text-sm text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  }
}

export async function CodeBlock({
  children,
  className,
  ...props
}: CodeBlockProps) {
  // Check if this is a code block (has code child) or just regular pre
  const hasCodeChild = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === "code"
  );

  return (
    <pre
      className={cn(
        "PureCodeBlock relative mb-6 mt-6 overflow-x-auto rounded-lg border border-border bg-muted p-4 font-mono text-sm leading-relaxed [&>code]:bg-transparent [&>code]:p-0",
        className
      )}
      {...props}
    >
      {hasCodeChild ? (
        children
      ) : (
        <code className="PureCodeBlock font-mono">{children}</code>
      )}
    </pre>
  );
}
