export const logoApp =
  'https://res.cloudinary.com/daij4l3is/image/upload/v1691522537/kdrragm16ba8srie54l0.webp'

export const title = 'BraillEasy'
export const url = 'https://braillease-git-main-larzlrael.vercel.app/'

export const description =
  'BraillEasy es una aplicación que permite a las personas con discapacidad visual aprender braille de una manera sencilla y divertida.'

export function descriptionMeta(phrase: string) {
  return {
    logo: logoApp,
    title,
    description: `Asi se escribe ${phrase} en Braille`,
    url,
  }
}
