"use client";

import styles from "./Footer.module.scss";

import Link from "next/link";

import { linksData } from "@/data/navigationLinks";
import { socialMediaData } from "@/data/socialMediaData";

import Logo from "@/svgr/logo.svg";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.wrapper}>
                    <Link
                        href="/"
                        aria-label="The company's logo to navigate to the home page"
                    >
                        <Logo />
                    </Link>

                    <nav className={styles.navigation}>
                        <ul className={styles.navigation_list}>
                            {linksData.map((link, index) => {
                                return (
                                    <li
                                        className={styles.navigation_item}
                                        key={index}
                                    >
                                        <Link
                                            href="/"
                                            aria-label={link.linkName}
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
                <div className={styles.wrapper}>
                    <nav className={styles.socialMedia}>
                        <ul className={styles.socialMedia_list}>
                            {socialMediaData.map((link, index) => {
                                return (
                                    <li
                                        className={styles.socialMedia_item}
                                        key={index}
                                    >
                                        <Link
                                            href={link.path}
                                            aria-label={link.title}
                                            className={styles.socialMedia_link}
                                        >
                                            {link.icon}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <p className={styles.rights_paragraph}>
                        © 2021 Loopstudios. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
