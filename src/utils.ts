import { getCollection } from 'astro:content'

const entries = await getCollection('editions')

// The latest edition is the one with the most recent date
export const [latest] = entries
  .sort((a, b) => a.data.date.getTime() - b.data.date.getTime())
  .slice(-1)
