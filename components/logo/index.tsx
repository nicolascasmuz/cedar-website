import Image from "next/image";
import cedarLogo from "resources/cedar-logo.webp";
import styles from "./logo.module.css";

export function Logo() {
  return (
    <Image
      className={styles["logo-comp"]}
      src={cedarLogo}
      alt="cedar-logo"
      width={75}
      height={75}
    />
  );
}
