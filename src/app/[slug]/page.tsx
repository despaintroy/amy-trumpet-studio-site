import {GenerateMetadataFunction, PageComponent} from "@/types";
import {capitalize} from "@/helpers";
import {normalizeInstrumentName} from "@/app/[slug]/instruments";
import {notFound} from "next/navigation";
import {INSTRUMENTS} from "@/constants";
import styles from "./page.module.scss";
import {Fonts} from "@/fonts";
import ContactLinks from "@/components/ContactLinks/ContactLinks";
import InstrumentCards from "@/components/InstrumentCards/InstrumentCards";
import PrivateLessonsSection from "@/sections/PrivateLessonsSection";
import AboutSection from "@/sections/AboutSection";
import VideoSection from "@/sections/VideoSection";

export const generateMetadata: GenerateMetadataFunction<'slug'> = ({params}) => {
  const {slug} = params
  const instrument = normalizeInstrumentName(slug)

  if (!instrument) notFound()

  return {
    title: `Logan Utah ${capitalize(instrument)} Lessons | Amy's Music Studio`,
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

  return <>
    <div className={styles.titleArea}>
      <div className="container">
        <h1 className={Fonts.headings.className}>{capitalize(instrument)} Lessons</h1>
        <p>Private {instrument} music lessons in Logan, Utah <span className='no-wrap'>from Amy DeSpain</span></p>
      </div>
    </div>

    <section style={{paddingTop: '3rem'}}>
      <div className="container">
        <ContactLinks/>
        <InstrumentCards/>
      </div>
    </section>

    <PrivateLessonsSection/>

    <AboutSection/>

    <VideoSection/>
  </>
}

export default Page
