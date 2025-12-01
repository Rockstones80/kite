import React from 'react'
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* Background Image Section */}
      <section className="relative h-[62vh] w-full pt-20 overflow-visible max-h-[60vh] my-auto">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/close-up-team-hand-shake.jpg"
            alt="Reports background"
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
            Reports
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
              <span className="text-orange-600">Reports</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <p className="text-gray-500 text-lg">No reports found.</p>
        </div>
      </section>

      
    </>
  )
}

export default page
