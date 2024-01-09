import { getCollection } from 'astro:content'

export const id = (x: any) => x

export const intersperse = (xs: any[], delim: any) =>
  xs.flatMap((x, i) => (i === 0 ? [x] : [delim, x]))

const entries = await getCollection('editions')

// The latest edition is the one with the most recent date
export const [latest] = entries
  .sort((a, b) => a.data.date.getTime() - b.data.date.getTime())
  .slice(-1)
