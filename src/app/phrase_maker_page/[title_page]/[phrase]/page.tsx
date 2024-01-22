/* 'use client' */
/* import { useParams } from 'next/navigation' */
import { descriptionMeta } from '@/constants/appInfo'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { phrase: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  /* const phrase = params.phrase */

  // fetch data

  // optionally access and extend (rather than replace) parent metadata
  /* const previousImages = (await parent).openGraph?.images || [] */

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

export default function Page({ params, searchParams }: Props) {
  return (
    <div>
      <p>{params.phrase}</p>
      <h1>testing</h1>
    </div>
  )
}
