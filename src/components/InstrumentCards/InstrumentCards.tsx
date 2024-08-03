import {FC} from "react";
import Image from "next/image";
import styles from './InstrumentCards.module.scss';

import pianoWatercolorPic from "@/images/piano-watercolor.png";
import trumpetWatercolorPic from "@/images/trumpet-watercolor.png";
import clarinetWatercolorPic from "@/images/clarinet-watercolor.png";

const InstrumentCards: FC = () => {
  return <div className={styles.instrumentCards}>
    <div className={styles.instrumentCard}>
      <Image
        src={pianoWatercolorPic}
        alt="piano watercolor illustration"
        width={250}
        height={250}
        style={{transform: "scale(0.85)"}}
      />
      <p>Piano lessons</p>
    </div>

    <div className={styles.instrumentCard}>
      <Image
        src={trumpetWatercolorPic}
        alt="trumpet watercolor illustration"
        width={250}
        height={250}
      />
      <p>Trumpet lessons</p>
    </div>

    <div className={styles.instrumentCard}>
      <Image
        src={clarinetWatercolorPic}
        alt="clarinet watercolor illustration"
        width={250}
        height={250}
        style={{transform: "rotate(-60deg)"}}
      />
      <p>Clarinet lessons</p>
    </div>
  </div>
}

export default InstrumentCards;
