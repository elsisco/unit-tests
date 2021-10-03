export const hashtags = (text) => {
  const words = text.split(' ')
  const hashtagArray = words.filter(items => items.startsWith('#'))
  return hashtagArray
}
