import { client } from "@/sanity/lib/client";
import { postQuery, postSlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import PortableText from "@/components/sanity/portable-text";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export const revalidate = 60; // Revalidate every 60 seconds

async function getPost(slug: string) {
  return await client.fetch(postQuery, { slug });
}

export async function generateStaticParams() {
  const slugs = await client.fetch(postSlugsQuery);
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to News</span>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      {post.mainImage && (
        <div className="relative w-full h-64 sm:h-96 md:h-[500px]">
          <Image
            src={urlFor(post.mainImage)
              .width(1200)
              .height(600)
              .fit("max")
              .auto("format")
              .url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map(
              (
                category: { title: string; slug: { current: string } },
                idx: number
              ) => (
                <span
                  key={idx}
                  className="text-sm font-semibold text-green-800 bg-green-100 px-3 py-1 rounded"
                >
                  {category.title}
                </span>
              )
            )}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 pb-8 border-b border-gray-200">
          {post.author?.name && (
            <div className="flex items-center gap-2">
              {post.author.image && (
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={urlFor(post.author.image)
                      .width(40)
                      .height(40)
                      .fit("crop")
                      .auto("format")
                      .url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700 font-medium">
                  {post.author.name}
                </span>
              </div>
            </div>
          )}
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Body Content */}
        <div className="prose prose-lg max-w-none">
          <PortableText content={post.body} />
        </div>
      </article>

      {/* Footer Navigation */}
      <div className="bg-gray-50 border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-green-800 hover:text-green-600 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View All News</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
