import BoxTitle from "../../Components/BoxTitle";
import styles from "./styles.module.scss";

export default function Testimonials() {
  const data = {
    title: <>Testimonials</>,
    title_bold: <>What our client are saying</>,
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <BoxTitle title={data.title} title_bold={data.title_bold} />
        </div>
        <div className={styles.box_cards}>
          <div className={styles.card}>
            <picture className={styles.box_img}>
              <img
                src="Assets/restaurant/testimonials/image01.png"
                className={styles.img}
                alt="Landscape picture"
              />
            </picture>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque <br /> bibendum non dui volutpat fringilla
              bibendum. Urna, elit augue urna, vitae feugiat <br /> pretium
              donec id elementum. Ultrices mattis sed vitae mus risus. Lacus
              nisi, et ac <br /> dapibus sit eu velit in consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
