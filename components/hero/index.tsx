import Image from "next/image";
import styles from "./hero.module.css";
import fondoTextura from "resources/fondo-hero.webp";
import heroPlaceholder from "resources/hero_01.png";
import cedarImagotipo from "resources/cedar-imagotipo_02.png";

export default function Hero() {
  return (
    <section className={styles["section-intro"]}>
      <Image
        src={fondoTextura}
        alt="Fondo textura"
        fill
        priority
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <h2 className={styles["section-intro__title"]}>ARTÍCULOS SUBLIMADOS</h2>
      <Image
        className={styles["section-intro__hero-placeholder"]}
        src={heroPlaceholder}
        alt="hero-placeholder"
      />
      <div className={styles["section-intro__goods-container"]}>
        <span className={styles["section-intro__goods"]}>Tazas</span>
        <span className={styles["section-intro__goods"]}>Termos</span>
        <span className={styles["section-intro__goods"]}>Mates</span>
        <span className={styles["section-intro__goods"]}>Chops</span>
        <span className={styles["section-intro__goods"]}>y más...</span>
      </div>
      <Image
        className={styles["section-intro__imagotipo"]}
        src={cedarImagotipo}
        alt="cedar-imagotipo"
      />
    </section>
  );
}
