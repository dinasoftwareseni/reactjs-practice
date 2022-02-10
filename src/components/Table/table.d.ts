export type TableHeader = {
  id: string
  text: string
}

export type TableItem = {
  [key: string]: string | number
}

export type TableProps = {
  headers: TableHeader[]
  items: TableItem[]
}
