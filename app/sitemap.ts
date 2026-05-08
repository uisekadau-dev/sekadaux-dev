export const baseUrl = 'https://sekadaux-dev.vercel.app'

export default async function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ]
}
