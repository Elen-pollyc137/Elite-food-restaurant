import styles from "./styles.module.scss";
import BoxTitle from "../../Components/BoxTitle";

export default function MeetOurCheef() {
  const data = {
    title: <>Choose & pick</>,
    title_bold: <>From Our Menu</>,
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <BoxTitle title={data.title} title_bold={data.title_bold} />
        </div>

        <div className={styles.box_cards}>
          <picture className={styles.box_img}>
            <img
              src="Assets/restaurant/meetourcheef/image01.png"
              className={styles.img}
              alt="Landscape picture"
            />
          </picture>
          <picture className={styles.box_img}>
            <img
              src="Assets/restaurant/meetourcheef/image02.png"
              className={styles.img}
              alt="Landscape picture"
            />
          </picture>
          <picture className={styles.box_img}>
            <img
              src="Assets/restaurant/meetourcheef/image03.png"
              className={styles.img}
              alt="Landscape picture"
            />
          </picture>
          <picture className={styles.box_img}>
            <img
              src="Assets/restaurant/meetourcheef/image04.png"
              className={styles.img}
              alt="Landscape picture"
            />
          </picture>
        </div>
        <div className={styles.box_button}>
          <a href="#">
            <div>See More</div>
          </a>
        </div>
      </div>
    </section>
  );
}
