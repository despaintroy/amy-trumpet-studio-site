import React, {FC} from "react";
import styles from './Footer.module.scss';
import {INSTRUMENT_PAGES} from "@/constants";
import {capitalize} from "@/helpers";

const Footer: FC = () => {
  return (
    <footer>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href='/'>Home</a>
          </li>
          {INSTRUMENT_PAGES.map(instrument => (
            <li key={instrument}>
              <a href={`/${instrument}`}>{capitalize(instrument)}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
