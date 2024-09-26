import styles from "./page.module.scss";
import { Header, Main, Footer } from "./components";

export default function Home() {
    return (
        <div className={styles.page}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
