/* 'use client' */
/* import { useParams } from 'next/navigation' */
import type { Metadata, ResolvingMetadata } from 'next'

import Head from 'next/head'

interface Detail {
  phrase: string
}

function PhraseDetail(props: Props) {
  /* const params = useParams<{ phrase: string }>() */
  /* console.log(params.phrase) */
  return (
    <div>
      <Head>
        <title>testing</title>
      </Head>
      <p>Hello</p>
      <h1>testing</h1>
    </div>
  )
}

type Props = {
  params: { phrase: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const phrase = params.phrase

  // fetch data

  // optionally access and extend (rather than replace) parent metadata
  /* const previousImages = (await parent).openGraph?.images || [] */

  return {
    title: params.phrase,

    openGraph: {
      images: [
        'https://www.gob.mx/cms/uploads/article/main_image/30006/braille3.jpg',
      ],
      description: `Asi se escribe esto ${params.phrase}`,
      url: `https://braillease.web.app/`,
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
