export interface BlogArticle {
  published: string
  tags: string[]
  readingTime: number
  title: string
  image: string
  _path: string
  metaDesc: string
  attribution?: string
  writerImg?: string
  writerName?: string
}

export interface GuideArticle {
  title: string
  description: string
  image: string
  metaDesc: string
  published: string
}

export interface Title {
  id: string
  text: string
  children: Title[]
}
