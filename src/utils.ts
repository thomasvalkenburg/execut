export const id = (x: any) => x

export const intersperse = (xs: any[], delim: any) =>
  xs.flatMap((x, i) => (i === 0 ? [x] : [delim, x]))
