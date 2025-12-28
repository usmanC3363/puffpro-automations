// ./src/components/RichText.tsx

import { RichTextField } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  PrismicLink,
} from "@prismicio/react";

// ✅ GLOBAL DEFAULT STYLES
export const richTextBaseComponents: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") return <code>{children}</code>;
  },

  heading1: ({ children }) => (
    <h1 className="text-4xl font-normal xl:text-6xl 2xl:text-7xl">
      {children}
    </h1>
  ),

  heading2: ({ children }) => <h2 className="text-xl">{children}</h2>,

  heading3: ({ children }) => <h3 className="text-lg">{children}</h3>,

  paragraph: ({ children }) => (
    <p className="text-base leading-relaxed 2xl:text-lg">{children}</p>
  ),

  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className="underline">
      {children}
    </PrismicLink>
  ),

  list: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,

  listItem: ({ children }) => <li className="my-1.5">{children}</li>,
};

interface RichTextProps {
  field: RichTextField;
  components?: JSXMapSerializer; // ✅ allow overrides
}

export const MyRichText = ({ field, components }: RichTextProps) => {
  // ✅ merge global + local overrides
  const mergedComponents = {
    ...richTextBaseComponents,
    ...(components || {}),
  };

  return <PrismicRichText field={field} components={mergedComponents} />;
};
