import { PortableTextBlock } from "@portabletext/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author?: {
    name: string;
    image?: SanityImageSource;
  };
  mainImage: SanityImageSource;
  publishedAt: string;
  excerpt?: string;
  body: PortableTextBlock[];
  categories?: Array<{
    title: string;
    slug: {
      current: string;
    };
  }>;
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
}
