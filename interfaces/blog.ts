export interface BlogArticle {
  published: string
  tags: string[]
  readingTime: number
  title: string
  image: string
  _path: string
  metaDesc: string
}

export interface Title {
  id: string
  text: string
  children: Title[]
}
