import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { GetStaticProps } from "next";
import Image from "next/image";
import malaysia from "../public/images/malaysia-map.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bgWrap}>
        <Image
          alt="Malaysia"
          src={malaysia}
          placeholder="blur"
          quality={100}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div>
        <p className={styles.bgText}>
          Data: The backbone of effective governance
        </p>
        <p className={styles.bgDesc}>
          OpenDOSM is a platform that catalogs, visualises, and analyses DOSM's
          wealth of data. Everything on this site is open-sourced and freely
          available for the nation's benefit.
        </p>
      </div>
      <div className={styles.grid}>
        <Link href="/economy" className={styles.card} rel="noopener noreferrer">
          <h2>
            Economy <span>-&gt;</span>
          </h2>
          <p>Description</p>
        </Link>

        <Link
          href="/financial"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Financial Sector <span>-&gt;</span>
          </h2>
          <p>Description</p>
        </Link>

        <Link href="/social" className={styles.card} rel="noopener noreferrer">
          <h2>
            Social <span>-&gt;</span>
          </h2>
          <p>Description</p>
        </Link>

        <Link
          href="/national"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            National Accounts <span>-&gt;</span>
          </h2>
          <p>Description</p>
        </Link>
        <Link
          href="/demography"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Demography <span>-&gt;</span>
          </h2>
          <p>Description</p>
        </Link>
      </div>
    </div>
  );
}
