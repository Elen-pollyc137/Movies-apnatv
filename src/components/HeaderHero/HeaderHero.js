import styles from "./styles.module.css";
import { useState } from "react";

function ImagemSVGStart() {
  const [corPreenchimento, setCorPreenchimento] = useState("transparent");

  return (
    <svg
      className={styles.box_svg}
      onMouseOver={() => setCorPreenchimento("yellow")}
      onMouseLeave={() => setCorPreenchimento("yellow")}
      fill={corPreenchimento}
    >
      <path
        d="M10.2026 1.84124C10.6661 0.930713 11.967 0.930713 12.4305 1.84124L14.143 5.20516C14.5547 6.01372 15.3386 6.56721 16.2383 6.68447L19.9582 7.16929C21.0134 7.30682 21.4251 8.61586 20.6387 9.33266L18.0657 11.6778C17.3602 12.3208 17.0386 13.2835 17.216 14.2214L17.8655 17.6545C18.0585 18.6747 16.9954 19.4719 16.0701 19.0007L12.5643 17.2157C11.7804 16.8165 10.8527 16.8165 10.0688 17.2157L6.56301 19.0007C5.63767 19.4719 4.57461 18.6747 4.76762 17.6545L5.41705 14.2214C5.59447 13.2835 5.27288 12.3208 4.56743 11.6778L1.9944 9.33266C1.20794 8.61585 1.61969 7.30682 2.67487 7.16929L6.39475 6.68447C7.29445 6.56721 8.07841 6.01372 8.49004 5.20516L10.2026 1.84124Z"
        stroke="#FFC700"
        // stroke-width="1.5"
      />
    </svg>
  );
}
function ImagemSVGPlay() {
  const [corPreenchimento, setCorPreenchimento] = useState("#ffffff");

  return (
    <svg
      className={styles.box_svg}
      onMouseOver={() => setCorPreenchimento("#fa4776")}
      onMouseLeave={() => setCorPreenchimento("#ffffff")}
      fill={corPreenchimento}
    >
      <path
        d="M12.9119 7.62278C14.4719 8.82369 14.4719 11.1763 12.9119 12.3772L5.07998 18.4062C3.10728 19.9248 0.25 18.5185 0.25 16.029L0.25 3.97098C0.25 1.48146 3.10728 0.0751767 5.07998 1.59377L12.9119 7.62278Z"
        stroke="#ffffff"
        // fill="white"
      />
    </svg>
  );
}
<svg
  width="15"
  height="20"
  viewBox="0 0 15 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.9119 7.62278C14.4719 8.82369 14.4719 11.1763 12.9119 12.3772L5.07998 18.4062C3.10728 19.9248 0.25 18.5185 0.25 16.029L0.25 3.97098C0.25 1.48146 3.10728 0.0751767 5.07998 1.59377L12.9119 7.62278Z"
    fill="white"
  />
</svg>;

function HeaderHero() {
  return (
    <div className={styles.container}>
      <div className={styles.box_title}>
        <h1>STAR WARS</h1>
        <h2>THE RISE OF SKYWALKER</h2>
        <p>
          The surviving members of the resistance face the First Order <br />{" "}
          once again, and the legendary conflict between the Jedi and the <br />{" "}
          Sith reaches its peak bringing the Skywalker saga to its end.{" "}
        </p>
      </div>
      <div className={styles.box_star}>
        <ImagemSVGStart />
        <ImagemSVGStart />
        <ImagemSVGStart />
        <ImagemSVGStart />
        <ImagemSVGStart />{" "}
        <div className={styles.box_button}>
          <button>
            <ImagemSVGPlay /> Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeaderHero;
