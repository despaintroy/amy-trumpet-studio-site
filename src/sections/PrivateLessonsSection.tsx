import {FC} from "react";
import {Fonts} from "@/fonts";
import Image from "next/image";
import styles from './PrivateLessonsSection.module.scss';

import amyStudentPic from "@/images/amy-student.jpg";

const PrivateLessonsSection: FC = () => {
  return (
    <section>
      <div className="container">
        <h2 className={Fonts.headings.className}>Private Music Lessons</h2>

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
          Prices are $20 for a half hour, or $35 for an hour.
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
