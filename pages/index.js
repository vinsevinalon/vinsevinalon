import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Vinse Viñalon</title>
                <meta
                    name="description"
                    content="Developed by Vinse Viñalon"
                />
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
                <p className="index-p">Rolling out soon..</p>
            </main>
        </div>
    );
}