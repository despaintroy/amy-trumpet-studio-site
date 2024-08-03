import {FC} from "react";
import {Fonts} from "@/fonts";
import Image from "next/image";

import amyPlayBwPic from "@/images/amy-play-bw.jpg";

const AboutSection: FC = () => {
  return (
    <section>
      <div className="container">
        <h2 className={Fonts.headings.className}>About Amy</h2>

        <Image
          src={amyPlayBwPic}
          alt="Amy playing a trumpet solo in band"
          className="inline-image inline-image-left"
          width={300}
          height={260}
        />

        <p>
          I began the exciting journey of learning the trumpet when I was 12 and quickly fell in love with making
          music. At Utah State University, I grew my musicianship skills and graduated with a degree in music
          education. I have loved teaching ever since.
        </p>
        <p>
          I have performed with the American Festival Orchestra, the USU Wind Ensemble, the Caine Brass Quintet, and
          USU&apos;s Symphony Orchestra. In 2018, I participated in a trumpet ensemble that performed for the
          International Trumpet Guild in San Antonio, Texas, and in 2022 won USU&apos;s concerto competition.
        </p>
        <p>
          When not playing the trumpet, you can find me making delicious creations in the kitchen or going for long
          runs in the sun!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
