"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CircleUser } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author?: {
    name: string;
    image?: SanityImageSource;
  };
  mainImage: SanityImageSource;
  publishedAt: string;
  excerpt?: string;
  categories?: Array<{
    title: string;
    slug: { current: string };
  }>;
}

interface NewsArticlesGridProps {
  posts: Post[];
}

export default function NewsArticlesGrid({ posts }: NewsArticlesGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">No news articles found.</p>
        <p className="text-gray-400 mt-2">
          Start creating posts in your Sanity Studio.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      {posts.map((post, index) => {
        const formattedDate = new Date(post.publishedAt)
          .toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })
          .toUpperCase();

        return (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="bg-white shadow-lg overflow-hidden cursor-pointer group"
          >
            <Link href={`/news/${post.slug.current}`}>
              {/* Image Section */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage)
                      .width(600)
                      .height(400)
                      .fit("crop")
                      .auto("format")
                      .url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No image</span>
                  </div>
                )}
                {/* Date Overlay - Orange with rounded bottom corners */}
                <div className="absolute bottom-0 right-0 bg-[#f97316] text-white px-4 py-2">
                  <span className="text-sm font-bold">{formattedDate}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 space-y-4">
                {/* Author */}
                <div className="flex items-center gap-2 text-gray-700">
                  <CircleUser className="w-4 h-4 text-[#f97316]" />
                  <span className="text-sm font-medium text-gray-500">
                    {post.author?.name || "Admin"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 line-clamp-2 group-hover:text-green-800 transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                {post.excerpt && (
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed line-clamp-3 font-extralight">
                    {post.excerpt}
                  </p>
                )}

                {/* Read More Link */}
                <div className="inline-block text-gray-900 font-semibold text-sm group-hover:text-green-800 transition-colors">
                  &gt;&gt; READ MORE
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
