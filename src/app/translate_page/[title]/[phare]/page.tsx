import { descriptionMeta, logoApp } from '@/constants/appInfo'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { phrase: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

/* important the "export" */

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const phrase = params.phrase
  const metadata = descriptionMeta(phrase)
  return {
    title: metadata.title,
    openGraph: {
      images: [metadata.logo],
      description: metadata.description,
      url: metadata.url,
    },
  }
}

export default function PhraseTranslatePage() {
  return <div>PhraseTranslatePage</div>
}
