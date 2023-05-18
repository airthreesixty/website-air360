import { cheerioJsonMapper } from 'cheerio-json-mapper'
import merge from 'lodash/merge'

export default async (html: string, route: string) => {
  const matched = route.match(/^\/(\w{2})\//)

  const defaultResult = {
    content: null,
    language: matched ? matched[1] : null,
  }

  const result = await cheerioJsonMapper(html, {
    $: 'article',
    title: 'h1',
    h2: '.prose h2',
    h3: '.prose h3',
    h4: '.prose h4',
    content: '.prose p, .prose li, .prose table',
  })

  if (!result) {
    return defaultResult
  }

  return merge(defaultResult, result)
}
