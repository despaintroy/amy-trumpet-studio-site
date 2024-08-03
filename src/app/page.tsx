import Image from "next/image";
import styles from "./page.module.css";
import {YouTubeEmbed} from '@next/third-parties/google'

// <Image
//   className={styles.logo}
//   src="/next.svg"
//   alt="Next.js Logo"
//   width={180}
//   height={37}
//   priority
// />

export default function Home() {
  return (
    <>
      <div className="title-area">
        <div className="container">
          <h1>Amy&apos;s Music Studio</h1>
          <p>Private music lessons in Logan, UT for piano, trumpet, clarinet, <span className="no-wrap">and brass
                    instruments</span>
          </p>
        </div>
      </div>

      <div className="hero-img" role="img" aria-label="Amy DeSpain holding a trumpet">
      </div>

      <section className="section" style={{paddingTop: '3rem'}}>
        <div className="container">
          <div className="contact-cards">
            <a className="contact-card" href="tel:801-644-1283">801-644-1283</a>
            <a className="contact-card" href="mailto:amydespain365@gmail.com">amydespain365@gmail.com</a>
          </div>

          <div className="instrument-cards">
            <div className="instrument-card">
              <img loading="lazy" src="img/piano-watercolor.png" alt="piano watercolor illustration"
                   width="250px" height="250px" style={{transform: "scale(0.85)"}}/>
              <p>Piano lessons</p>
            </div>

            <div className="instrument-card">
              <img loading="lazy" src="img/trumpet-watercolor.png" alt="trumpet watercolor illustration"
                   width="250px" height="250px"/>
              <p>Trumpet lessons</p>
            </div>

            <div className="instrument-card">
              <img loading="lazy" src="img/clarinet-watercolor.png" alt="clarinet watercolor illustration"
                   width="250px" height="250px" style={{transform: "rotate(-60deg)"}}/>
              <p>Clarinet lessons</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Private Music Lessons</h2>

          <img loading="lazy" src="img/amy-student.jpg" alt="Amy posing for a picture with one of her students"
               className="inline-image inline-image-right" width="300px" height="303px"/>

          <p>
            My goal is to help everyone find the joy of making music and be enthusiastic about practicing!
          </p>
          <p>
            <a href="tel:801-644-1283">Call</a>, <a href="tel:801-644-1283">email</a>, or <a
            href="sms:801-644-1283">text</a> me to schedule a lesson. We meet weekly at a time that
            works
            for you. I teach from my home in Logan, Utah.
          </p>

          <p>
            Prices are $20 for a half hour, or $35 for an hour.
          </p>

          <div className="divider"></div>

          <p>
            Phone: <a href="tel:801-644-1283">801-644-1283</a><br/>
            Email: <a href="mailto:amydespain365@gmail.com">amydespain365@gmail.com</a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>About Amy</h2>
          <p>
            <img loading="lazy" src="img/amy-play-bw.jpg" alt="Amy playing a trumpet solo in band"
                 className="inline-image inline-image-left" width="300px" height="260px"/>
            I began the exciting journey of learning the trumpet when I was 12 and quickly fell in
            love with making music. At Utah State University, I grew my musicianship skills and graduated with a
            degree
            in music education. I have loved teaching ever since.
          </p>
          <p>
            I have performed with the American Festival Orchestra, the USU Wind Ensemble, the Caine
            Brass Quintet, and USU&apos;s Symphony Orchestra. In 2018, I participated in a trumpet ensemble that
            performed for the International Trumpet Guild in San Antonio, Texas, and in 2022 won USU&apos;s
            concerto competition.
          </p>
          <p>
            When not playing the trumpet, you can find me making delicious creations in
            the kitchen or going for long runs in the sun!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Videos</h2>

          <YouTubeEmbed
            videoid="vgohPCWxwCI"
            params="start=1777"
            playlabel="Amy DeSpain | USU Concerto Competition"
            style="background-image: url('img/concerto-poster.jpg');"
          />
        </div>
      </section>
    </>
  );
}
