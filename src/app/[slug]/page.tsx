import {GenerateMetadataFunction, PageComponent} from "@/types";
import {capitalize} from "@/helpers";
import {normalizeInstrumentName} from "@/app/[slug]/instruments";
import {notFound} from "next/navigation";
import {INSTRUMENTS} from "@/constants";

export const generateMetadata: GenerateMetadataFunction<'slug'> = ({params}) => {
  const {slug} = params
  const instrument = normalizeInstrumentName(slug)

  if (!instrument) notFound()

  return {
    title: `${capitalize(instrument)} Lessons | Amy's Music Studio`,
    description: `Private ${instrument} lessons in Logan, Utah`,
  }
}

export async function generateStaticParams() {
  return INSTRUMENTS.map((instrument) => ({slug: instrument}))
}

const Page: PageComponent<'slug'> = ({params}) => {
  const {slug} = params
  const instrument = normalizeInstrumentName(slug)
  if (!instrument) notFound()

  return <h1>{capitalize(instrument)} Lessons</h1>
}

export default Page
