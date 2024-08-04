import Image from "next/image";
import styles from "./page.module.scss"

// IMAGES
import coverPic from "@/images/cover.jpg";
import {Fonts} from "@/fonts";
import InstrumentCards from "@/components/InstrumentCards/InstrumentCards";
import ContactLinks from "@/components/ContactLinks/ContactLinks";
import AboutSection from "@/sections/AboutSection";
import VideoSection from "@/sections/VideoSection";
import PrivateLessonsSection from "@/sections/PrivateLessonsSection";

export default function Home() {
  return (
    <>
      <div className={styles.titleArea}>
        <div className="container">
          <h1 className={Fonts.headings.className}>Amy&apos;s Music Studio</h1>
          <p>Private music lessons in Logan, Utah for piano, trumpet, clarinet, <span className="no-wrap">and brass instruments</span>
          </p>
        </div>
      </div>

      <div className={styles.heroImgContainer}>
        <Image
          src={coverPic}
          alt="Amy DeSpain holding a trumpet"
          style={{objectFit: 'cover', objectPosition: 'center'}}
          fill
          priority
        />
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
  );
}
