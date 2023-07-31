import { serverQueryContent } from '#content/server'

export default cachedEventHandler(async (event) => {
  const docs = await serverQueryContent(event).where({ _path: { $contains: 'blog' } }).find()

  return docs.map((p) => {
    // Remove locale on path
    return { loc: `${p._path}/`, lastmod: p.published }
  })
}, {
  name: 'sitemap-dynamic-urls',
  maxAge: 60 * 10, // cache URLs for 10 minutes
})
