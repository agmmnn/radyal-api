import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://github.com/agmmnn/radyal-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              alt="Github"
              className={styles.vercelLogo}
              width={16}
              height={16}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/plug.svg"
          alt="plug"
          width={50}
          height={37}
          priority
        />
        <Image
          className={styles.logo}
          src="/radyal.svg"
          alt="radyal Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/api.svg" alt="api" width={180} height={37} priority />
        </div>
      </div>

      <div className={styles.center2}>
        <Link href="/doc" className={styles.card}>
          <p className={inter.className}>
            Doc <span>-&gt;</span>
          </p>
        </Link>
      </div>

      <div className={styles.grid}>
        <a
          href="/api/nisanyan-decrypt"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            NisanyanDecrypt <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Decode the result returned from{" "}
            <a
              href="https://www.nisanyansozluk.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nisanyansozluk.com
            </a>
            's API, examples:{" "}
            <a
              href="/api/nisanyan-decrypt?word=sanat"
              target="_blank"
              rel="noopener noreferrer"
            >
              word
            </a>
            ,{" "}
            <a
              href="/api/nisanyan-decrypt?url=https%3A%2F%2Fwww.nisanyansozluk.com%2Fapi%2Fwords%2Fsanat%3Fsession%3D1"
              target="_blank"
              rel="noopener noreferrer"
            >
              url
            </a>
          </p>
        </a>

        <a
          href="/api/nisanyanadlar-decrypt"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            NisanyanAdlarDecrypt <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Decode the result returned from{" "}
            <a
              href="https://www.nisanyanadlar.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nisanyanadlar.com
            </a>
            's API, examples:{" "}
            <a
              href="/api/nisanyanadlar-decrypt?name=tigin"
              target="_blank"
              rel="noopener noreferrer"
            >
              word
            </a>
            .
          </p>
        </a>

        <a
          href="/api/esanlam?word=ruh"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            EsAnlam <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Turkish thesaurus returns synonyms and antonyms for the given word.
          </p>
        </a>

        <a
          href="/api/lugat?word=kemal"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Lugat <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            A dictionary from Ottoman Turkish to Modern Turkish, examples:{" "}
            <a
              href="/api/lugat?word=divane"
              target="_blank"
              rel="noopener noreferrer"
            >
              word
            </a>{" "}
            <a
              href="/api/lugat?word=d%C3%AEv%C3%A2ne"
              target="_blank"
              rel="noopener noreferrer"
            >
              other_forms
            </a>{" "}
            <a
              href="/api/lugat?word=%D8%AF%DB%AA%D9%8A%D9%88%D9%8E%D8%A7%D9%86%D9%8E%D9%87"
              target="_blank"
              rel="noopener noreferrer"
            >
              ar_script
            </a>
            .
          </p>
        </a>
      </div>
    </main>
  );
}
