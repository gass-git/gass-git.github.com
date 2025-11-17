import { parseMarkdown } from './parse-markdown.ts'
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

(async function(): Promise<void> {
  const __dirname = fileURLToPath(import.meta.url)
  const postsPath = path.resolve(__dirname, '../../posts')
  console.log(__dirname)
  console.log(postsPath)
  const files = fs.readdirSync(postsPath, {})
  const postsOutputDir = path.resolve(__dirname, '../../dist/posts')

  for (const fileName of files){
    const filePath = path.join(postsPath, fileName as string)
    const html = await parseMarkdown(filePath)

    const outputFile = path.join(postsOutputDir, (fileName as string).replace('.md', '.html'))

    // make sure the folder exists
    await fsPromises.mkdir(postsOutputDir, {recursive: true})

    // write the file
    await fsPromises.writeFile(outputFile, html, 'utf-8')
  }
})()