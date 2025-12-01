import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  mainImage,
  publishedAt,
  excerpt,
  categories[]-> {
    title,
    slug
  }
}`

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author,
  mainImage,
  publishedAt,
  excerpt,
  body,
  categories[]-> {
    title,
    slug
  }
}`

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][] {
  "slug": slug.current
}`

export const recentPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt
}`

export const postsByCategoryQuery = groq`*[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  mainImage,
  publishedAt,
  excerpt,
  categories[]-> {
    title,
    slug
  }
}`

