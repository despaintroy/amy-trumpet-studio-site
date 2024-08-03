import {FC} from "react";
import styles from "./ContactLinks.module.scss";

const ContactLinks: FC = () => {
  return (
    <div className={styles.contactLinks}>
      <a href="tel:801-644-1283">801-644-1283</a>
      <a href="mailto:amydespain365@gmail.com">amydespain365@gmail.com</a>
    </div>
  )
}

export default ContactLinks;
