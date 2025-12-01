"use client";

import {
  PortableText as PortableTextComponent,
  PortableTextComponents,
  PortableTextMarkComponentProps,
  PortableTextTypeComponentProps,
} from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextBlock } from "@portabletext/types";
import React from "react";

interface PortableTextProps {
  content: PortableTextBlock[];
}

interface ImageValue {
  _type: string;
  asset: {
    _ref: string;
  };
  alt?: string;
}

interface LinkValue {
  _type: string;
  href: string;
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }: PortableTextTypeComponentProps<ImageValue>) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-64 sm:h-96 md:h-[500px] my-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value)
              .width(1200)
              .height(600)
              .fit("max")
              .auto("format")
              .url()}
            alt={value.alt || "Blog post image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
          {value.alt && (
            <p className="text-sm text-gray-500 mt-2 text-center">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-4xl sm:text-5xl font-bold mt-8 mb-4 text-gray-900">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-3 text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl sm:text-3xl font-bold mt-5 mb-2 text-gray-900">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-xl sm:text-2xl font-bold mt-4 mb-2 text-gray-900">
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-green-800 pl-4 py-2 my-4 italic text-gray-700 bg-gray-50 rounded-r">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-base sm:text-lg leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-base sm:text-lg leading-relaxed">{children}</li>
    ),
  },
  marks: {
    link: ({ children, value }: PortableTextMarkComponentProps<LinkValue>) => {
      const rel = !value?.href?.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value?.href || "#"}
          rel={rel}
          className="text-green-800 hover:text-green-600 underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
};

export default function PortableText({ content }: PortableTextProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <PortableTextComponent value={content} components={components} />
    </div>
  );
}
