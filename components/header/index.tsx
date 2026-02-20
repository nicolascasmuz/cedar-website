import React, { useState, useEffect } from "react";
import Image from "next/image";
//import { useRouter } from "next/navigation";
import { Logo } from "../logo";
// import { useMe } from "lib/hooks";
import searchLoupe from "resources/loupe.png";
import burgerMenu from "resources/menu.png";
import { StraightButton } from "ui/buttons";
import { Input, InputResponsive } from "ui/inputs";
// import { ProfileIcon } from "ui/icons";
import { DropdownMenu } from "components/dropdown-menu";
import styles from "./header.module.css";

export function Header() {
  /* const router = useRouter();
  const [loginDisplay, setLoginDisplay] = useState("none");
  const [profilePicDisplay, setProfilePicDisplay] = useState("none");
  const data: any = useMe();

  useEffect(() => {
    if (data) {
      setLoginDisplay("none");
      setProfilePicDisplay("block");
    } else {
      setLoginDisplay("block");
      setProfilePicDisplay("none");
    }
  }, [data]);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const queryValue = e.target.query.value;

    if (queryValue) {
      router.push("/results/" + queryValue);
    }
  };

  async function HandleClick(e) {
    e.preventDefault();
    localStorage.removeItem("saved-state");

    router.refresh();
  } */

  return (
    <div className={styles["header"]}>
      <div className={styles["logo-form-container"]}>
        <a href="/">
          <Logo />
        </a>
      </div>
      <input
        className={styles["input-check"]}
        type="checkbox"
        id="check-loupe"
      />
      <label htmlFor="check-loupe" className={styles["label"]}>
        <Image
          className={styles["loupe-img"]}
          src={searchLoupe}
          alt="search-loupe"
        />
      </label>
      <input
        className={styles["header__menu-input"]}
        type="checkbox"
        id="check"
      />
      <label htmlFor="check" className={styles["header__menu-label"]}>
        <Image className={styles["img"]} src={burgerMenu} alt="burger-menu" />
      </label>
      <ul className={styles["header__menu-lista"]}>
        <li>
          <a
            className={styles["header__option"]}
            href="/login"
            /* style={{ display: loginDisplay }} */
            style={{ display: "none" }}
          >
            Iniciar sesión
          </a>
          <a
            className={styles["header__option"]}
            href="/profile"
            /* style={{ display: profilePicDisplay }} */
            style={{ display: "none" }}
          >
            Mi perfil
          </a>
          <a
            className={styles["header__option"]}
            href="/purchases"
            /* style={{ display: profilePicDisplay }} */
            style={{ display: "none" }}
          >
            Mis compras
          </a>
          <a className={styles["header__option"]} href="/about-us">
            Quienes somos
          </a>
          <a className={styles["header__option"]} href="/products">
            Productos
          </a>
          <a className={styles["header__option"]} href="/contact">
            Contacto
          </a>
          <a
            /* onClick={HandleClick} */
            className={styles["header__option"]}
            href="/"
            /* style={{ display: profilePicDisplay }} */
            style={{ display: "none" }}
          >
            Cerrar sesión
          </a>
        </li>
      </ul>
      <nav className={styles["nav"]}>
        <a className={styles["option"]} href="/about-us">
          Quienes somos
        </a>
        <a className={styles["option"]} href="/products">
          Productos
        </a>
        <a className={styles["option"]} href="/contact">
          Contacto
        </a>
        <a
          className={styles["header__login"]}
          href="/login"
          /* style={{ display: loginDisplay }} */
          style={{ display: "none" }}
        >
          Iniciar sesión
        </a>
        <DropdownMenu
          /* style={{ display: profilePicDisplay }} */ style={{
            display: "none",
          }}
        />
      </nav>
    </div>
  );
}
