import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Navigation from '../navigation/index.js';
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Vinse Viñalon - Contact</title>
                <meta name="description" content="Developed by Vinse Viñalon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Image
                    src="/earth.png"
                    alt="Vinse Viñalon"
                    width={100}
                    height={100}
                    className={styles.profile}
                />
                <br />
                <p>Let&#39;s work!</p>
                <br />
                <p className="index-p about">
                    e-mail: vinsevinalon@gmail.com
                </p>
                <br />
                <Navigation />
            </main>
        </div>
    );
}
