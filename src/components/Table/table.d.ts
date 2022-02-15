export type TableHeader = {
    id: string
    text: string
}
  
export type TableArticle = {
    [key: string]: string | number
}
  
export type TableProps = {
    headers: TableHeader[]
    articles: TableArticle[]
}