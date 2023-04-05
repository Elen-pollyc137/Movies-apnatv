import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Carrossel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const images = [
    {
      id: 1,
      img: "/Assets/carrossel/image01.png",
    },
    {
      id: 2,
      img: "Assets/carrossel/image02.png",
    },
    {
      id: 3,
      img: "/Assets/carrossel/image03.png",
    },
    {
      id: 4,
      img: "/Assets/carrossel/image04.png",
    },
    {
      id: 5,
      img: "/Assets/carrossel/image05.png",
    },
    {
      id: 6,
      img: "/Assets/carrossel/image06.png",
    },
  ];
  return (
    <div className={styles.container}>
      <motion.div
        ref={carousel}
        className={styles.box_carrossel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={styles.inner_carrossel}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map(({ id, img }) => (
            <motion.div key={id} className={styles.box_image}>
              <img src={img} alt="txt" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carrossel;
