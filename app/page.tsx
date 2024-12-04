import styles from "./page.module.css";
import SignInButton from "./components/SignInButton";
import {auth} from "@/auth";
import Image from "next/image";

export default async function Home() {

  const session = await auth();
  const imageUrl = session?.user?.image || "./placeholder.jpeg";

  return (
    <div className={styles.page}>
      {session 
        ? 
        <div>
          <Image
            src={imageUrl}
            alt={`${session.user?.name} Picture`}
            width={100}
            height={100}
            style={{ borderRadius: "50%" }}
          />
          <p>Welcome {session.user?.name}!</p> 
          <p>Email: {session.user?.email}</p>
        </div>
        : <p>Please sign in with google below</p>}
      <main className={styles.main}>

        <div className={styles.ctas}>
          <SignInButton />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
