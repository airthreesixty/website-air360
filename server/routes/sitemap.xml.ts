import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://air360.io/',
  })

  for (const doc of docs) {
    if (doc._path) {
      // if (doc._path.includes('/ja/')) {
      //   doc._path = doc._path.replace('/ja/', '/')
      // } else if (doc._path === '/ja') {
      //   doc._path = doc._path.replace('/ja', '')
      // }
      sitemap.write({
        url: doc._path + '/',
        changefreq: 'monthly',
      })
    }
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
