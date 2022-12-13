import styles from "./styles.module.scss";
import BoxTitle from "../../../Components/BoxTitle";

export default function Partners() {
  const data = {
    title: <>Partners & Clients</>,
    title_bold: <>We work with the best pepole</>,
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <BoxTitle
            title={data.title}
            title_bold={data.title_bold}
            dark="dark"
          />
        </div>
        <div className={styles.box_image}>
          <picture>
            <img
              src="Assets/restaurantpage/parteners/image03.png"
              className={styles.img}
              alt="Landscape picture"
            />
          </picture>
          <picture>
            <img
              src="Assets/restaurantpage/parteners/image04.png"
              className={styles.img}
              alt="Landscape picture"
            />
          </picture>
          <picture>
            <img
              src="Assets/restaurantpage/parteners/image05.png"
              className={styles.img}
              alt="Landscape picture"
            />
          </picture>
          <picture>
            <img
              src="Assets/restaurantpage/parteners/image06.png"
              className={styles.img}
              alt="Landscape picture"
            />
          </picture>
          <picture>
            <img
              src="Assets/restaurantpage/parteners/image07.png"
              className={styles.img}
              alt="Landscape picture"
            />
          </picture>
          <picture>
            <img
              src="Assets/restaurantpage/parteners/image08.png"
              className={styles.img}
              alt="Landscape picture"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
