import Image from "next/image";
import { CSSProperties } from "react";

export const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftCell}>
        <div>
          <Image src={"/hopr-favicon.svg"} width="58" height="58" />
        </div>
        <div>
          <div style={styles.addressWrapper}>
            <div>HOPR Services AGB</div>
            <div>leicherweg 33</div>
            <div>8003 Zürich</div>
            <div>Switzerland</div>
          </div>
          <div>©2021 HOPR Association, all rights reserved</div>
        </div>
      </div>
      <div>
        <ul style={styles.iconList}>
          <li>
            <a
              href="https://twitter.com/hoprnet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/twitter.svg" alt="twitter" height={16} width={16} />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/hoprnet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/telegram.svg"
                alt="telegram"
                height={16}
                width={16}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/hoprnet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                height={16}
                width={16}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hoprnet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/github.svg" alt="github" height={16} width={16} />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/hoprnet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/medium.svg" alt="medium" height={16} width={16} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC2DzUtC90LXdW7TfT3igasA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/youtube.svg" alt="youtube" height={16} width={16} />
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/dEAWC4G"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/discord.svg" alt="discord" height={16} width={16} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    color: "white",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: 500,
    background: "linear-gradient(180deg, #0000B4 0.5%, #000050 100%)",
  },
  iconList: {
    filter: "invert(1)",
    listStyle: "none",
    display: "flex",
    gap: 24,
  },
  leftCell: {
    display: "flex",
    gap: 36,
  },
  addressWrapper: {
    paddingBottom: 20,
  },
};
