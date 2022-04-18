import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

export const Navbar = () => {
  return (
    <div style={styles.container}>
      <Link href="/">
        <a
          href="/"
          style={{
            width: "fit-content",
            justifySelf: "center",
            alignSelf: "center",
            marginTop: 7,
          }}
        >
          <Image
            layout="fixed"
            src="/logo.svg"
            height={60}
            width={120}
            alt="hopr"
          />
        </a>
      </Link>
      <div style={styles.linksRow}>
        <Link href="/about-us">
          <a>ABOUT US</a>
        </Link>
        <Link href="/showcase">
          <a>SHOWCASE</a>
        </Link>
        <Link href="/earn">
          <a>EARN</a>
        </Link>
      </div>
      <a
        style={styles.githubIcon}
        href="https://github.com/hoprnet"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          layout="fixed"
          src="/github-icon.svg"
          height={40}
          width={40}
          alt="github"
        />
      </a>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    height: 80,
    backgroundColor: "white",
  },
  linksRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 60,
  },
  githubIcon: {
    alignSelf: "center",
    justifySelf: "end",
    marginRight: 20,
  },
};
