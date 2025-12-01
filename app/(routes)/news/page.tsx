import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import NewsArticlesGrid from "@/components/news/articles-grid";

export const revalidate = 60; // Revalidate every 60 seconds

async function getPosts() {
  return await client.fetch(postsQuery);
}

export default async function NewsPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Background Image Section */}
      <section className="relative h-[62vh] w-full pt-20 overflow-visible max-h-[60vh] my-auto">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/news/newspaper-background-concept.jpg"
            alt="News background"
            fill
            sizes="100vw"
            className="object-cover"
            quality={90}
            priority
          />
        </div>

        {/* Dark Semi-Transparent Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* News Text - Right Side */}
        <div className="relative z-20 h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1390px] mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            News
          </h1>
        </div>

        {/* Breadcrumb Navigation - Bottom Right */}
        <div className="absolute bottom-0 left-0 right-0 z-30 flex justify-end px-2 sm:px-4 md:px-6 lg:px-10 max-w-[1390px] mx-auto">
          <div className="bg-white rounded-t-lg px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5">
            <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-semibold">
              <Link
                href="/"
                className="text-black hover:text-orange-600 transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-orange-600">News</span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <NewsArticlesGrid posts={posts} />
        </div>
      </section>
    </>
  );
}
