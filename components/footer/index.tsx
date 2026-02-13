import Image from "next/image";
import { Logo } from "../logo";
import instagram from "resources/instagram.webp";
import facebook from "resources/facebook.webp";
import whatsapp from "resources/whatsapp.webp";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-logo-copyright"]}>
        <Logo />
        <h6 className={styles["footer-copyright"]}>
          © 2025 Nico's Instruments
        </h6>
      </div>
      <div className={styles["footer-socialmedia"]}>
        <a
          href="https://www.instagram.com/cedar.sublimacion/"
          className={styles["footer__links"]}
        >
          <Image
            src={instagram}
            alt="instagram-logo"
            className={styles["socialmedia-logo"]}
            width={35}
            height={35}
          />
        </a>
        <a
          href="https://www.facebook.com/cedar.sublimacion"
          className={styles["footer__links"]}
        >
          <Image
            src={facebook}
            alt="facebook-logo"
            className={styles["socialmedia-logo"]}
            width={35}
            height={35}
          />
        </a>
        <a href="" className={styles["footer__links"]}>
          <Image
            src={whatsapp}
            alt="whatsapp-logo"
            className={styles["socialmedia-logo"]}
            width={35}
            height={35}
          />
        </a>
      </div>
      <p className={styles["footer-datos"]}>
        (011) 4344-1298 contacto@nicosinstruments.com.ar Laprida 1234 Lomas de
        Zamora, Buenos Aires
      </p>
    </div>
  );
}
