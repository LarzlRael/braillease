import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { phrase: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const phrase = params.phrase

  return {
    title: 'BraillEasy',

    openGraph: {
      images: [
        'https://www.gob.mx/cms/uploads/article/main_image/30006/braille3.jpg',
      ],
      description: `Asi se escribe ${params.phrase} en Braille`,
      url: `https://braillease-git-main-larzlrael.vercel.app//`,
    },
  }
}

export default function PhraseTranslatePage() {
  return <div>PhraseTranslatePage</div>
}
