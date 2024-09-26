"use client";

import styles from "./Header.module.scss";

import { josefin } from "../../lib/fonts";

import Link from "next/link";

import { useState } from "react";

import { linksData } from "@/data/navigationLinks";

import Logo from "@/svgr/logo.svg";
import Hamburger from "@/svgr/icon-hamburger.svg";
import Close from "@/svgr/icon-close.svg";

export const Header = () => {
    const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

    const handleIsMenuMobileOpen = () => {
        setIsMenuMobileOpen(prevValue => !prevValue);
    };

    return (
        <header
            className={`${styles.header} ${
                isMenuMobileOpen && styles.isMenuOpen_bg
            } `}
        >
            <div className={styles.header_container}>
                <div className={styles.header_nav_container}>
                    <Link
                        href="/"
                        aria-label="The company's logo in header to navigate to the home page"
                    >
                        <Logo />
                    </Link>

                    <button
                        type="button"
                        title="menu"
                        className={styles.btn_menu}
                        onClick={handleIsMenuMobileOpen}
                    >
                        {!isMenuMobileOpen ? <Hamburger /> : <Close />}
                    </button>
                    <nav
                        aria-label="header"
                        className={`${styles.navigation}  ${
                            isMenuMobileOpen && styles.navigation_mobile
                        }`}
                    >
                        <ul className={styles.navigation_list}>
                            {linksData.map((link, index) => {
                                return (
                                    <li
                                        className={styles.navigation_item}
                                        key={index}
                                    >
                                        <Link
                                            href="/"
                                            aria-label={`${link.linkName} - header navigation`}
                                            className={styles.navigation_link}
                                        >
                                            {link.linkName}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                <h1 className={josefin.className}>
                    Immersive experiences that deliver
                </h1>
            </div>
        </header>
    );
};
