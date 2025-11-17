import { remark } from 'remark'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from 'rehype-pretty-code' 
import rehypeStringify from 'rehype-stringify'

export default async function processMD(md: string): Promise<string> {
  const result = await remark()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      onVisitLine(node: { children: string | any[] }) {
        if (node.children.length === 0) node.children = [{ type: "text", value: " " }]
      }
    })
    .use(rehypeStringify)
    .process(md)

  return result.toString()
}
