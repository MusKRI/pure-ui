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
          "PureInlineCode relative border border-border rounded bg-code px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] font-medium text-code-foreground",
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
        className={cn("PureCodeBlock block font-mono text-xs", className)}
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
          "PureCodeBlock block font-mono text-xs text-foreground",
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
    <div className="PureCodeBlock [&+.PureCodeBlock]:mt-6 mt-4 [.PureInstallationCommands+&]:mt-8 rounded-2xl bg-code border border-border relative bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_2px_1px_--theme(--color-black/4%)] after:pointer-events-none after:absolute after:-inset-[5px] after:-z-1 after:rounded-[calc(var(--radius-2xl)+4px)] after:border after:border-border/50 after:bg-clip-padding">
      <pre
        className={cn(
          "PureCodeBlock relative overflow-x-auto p-4 font-mono leading-relaxed [&>code]:bg-transparent [&>code]:p-0 [&_code]:!text-sm",
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
    </div>
  );
}
