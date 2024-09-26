import styles from "./Intro.module.scss";

import { josefin } from "../../../lib/fonts";

export const Intro = () => {
    const large = 1000;

    return (
        <section
            className={styles.section_intro}
            aria-label="a quick introduction about us"
        >
            <div className={styles.section_intro_img}>
                <picture>
                    <source
                        srcSet="/images/desktop/image-interactive.jpg"
                        media={`(min-width:${large}px)`}
                    />
                    <img src="/images/mobile/image-interactive.jpg" alt="" />
                </picture>
            </div>
            <div className={styles.section_intro_info}>
                <h2 className={josefin.className}>
                    The leader in interactive VR
                </h2>
                <p>
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies
                    around the globe. Our award-winning creations have
                    transformed businesses through digital experiences that bind
                    to their brand.
                </p>
            </div>
        </section>
    );
};
