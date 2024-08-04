import {FC} from "react";
import {Fonts} from "@/fonts";
import Image from "next/image";
import styles from './PrivateLessonsSection.module.scss';
import {INSTRUMENTS} from "@/constants";
import {InstrumentName} from "@/types";
import {capitalize} from "@/helpers";
import amyStudentPic from "@/images/amy-student.jpg";

type PrivateLessonsSectionProps = {
  instrument?: InstrumentName
}

const PrivateLessonsSection: FC<PrivateLessonsSectionProps> = (props) => {
  const {instrument} = props

  const otherInstruments = INSTRUMENTS.filter(x => x !== instrument)
  const instrumentSentence = instrument
    ? `In addition to ${instrument}, I also teach ${new Intl.ListFormat().format(otherInstruments)}.`
    : `I teach ${new Intl.ListFormat().format([...INSTRUMENTS, 'other brass instruments'])}.`

  return (
    <section>
      <div className="container">
        <h2 className={Fonts.headings.className}>Private {capitalize(instrument ?? 'music')} Lessons</h2>

        <Image
          src={amyStudentPic}
          alt="Amy posing for a picture with one of her students"
          className="inline-image inline-image-right"
          width={300}
          height={300}
        />

        <p>
          My goal is to help everyone find the joy of making music and be enthusiastic about practicing!
        </p>
        <p>
          <a href="tel:801-644-1283">Call</a>, <a href="tel:801-644-1283">email</a>, or <a
          href="sms:801-644-1283">text</a> me to schedule a lesson. We meet weekly at a time that works for you. I
          teach from my home in Logan, Utah.
        </p>

        <p>
          Prices are $20 for a half hour, or $35 for an
          hour. {instrumentSentence}
        </p>

        <div className={styles.divider}></div>

        <p>
          Phone: <a href="tel:801-644-1283">801-644-1283</a><br/>
          Email: <a href="mailto:amydespain365@gmail.com">amydespain365@gmail.com</a>
        </p>
      </div>
    </section>
  )
}

export default PrivateLessonsSection;
