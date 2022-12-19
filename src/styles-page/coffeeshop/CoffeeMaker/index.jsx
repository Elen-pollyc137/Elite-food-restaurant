import styles from "./styles.module.scss";
import react from "react";
import { useInView } from "react-intersection-observer";

export default function CoffeeMaker() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <picture
          className={inView ? styles[("box_img", "effect")] : styles.box_img}
          ref={ref}
        >
          <img
            src="Assets/coffee-shop/coffemaker/image01.png"
            className={styles.img}
            alt="Landscape picture"
          />
        </picture>
        <div className={styles.box_title}>
          <h3>Welcome to coffee hut</h3>
          <h1>
            Heal the world <br /> with coffee
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Varius sed pharetra dictum neque massa congue
          </p>

          <div className={styles.box_btn}>
            <div className={styles.box_button_trans}>
              <a href="#">Learm More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
