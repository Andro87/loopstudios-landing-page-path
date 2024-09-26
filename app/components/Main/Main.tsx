import styles from "./Main.module.scss";

import { Intro } from "./Intro/Intro";
import { Creations } from "./Creations/Creations";

export const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main_container}>
                <Intro />
                <Creations />
            </div>
        </main>
    );
};
