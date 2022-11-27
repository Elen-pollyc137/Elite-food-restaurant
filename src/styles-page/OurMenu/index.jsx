import BoxTitle from "../../Components/BoxTitle";
import styles from "./styles.module.scss";

export default function OurMenu() {
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
        <div className={styles.box_menu}>
          <a href="#">
            <div className={styles.solution}>Brakfast</div>
          </a>
          <a href="#">
            <div className={styles.solution}>Lunch</div>
          </a>
          <a href="#">
            <div className={styles.solution}>Dinner</div>
          </a>
          <a href="#">
            <div className={styles.solution}>Dessert</div>
          </a>
          <a href="#">
            <div className={styles.solution}>Drink</div>
          </a>
          <a href="#">
            <div className={styles.solution}>Snack</div>
          </a>
          <a href="#">
            <div className={styles.solution}>Suops</div>
          </a>
        </div>
        <div className={styles.box_cards}>
          <div>
            <picture className={styles.box_img}>
              <img
                src="Assets/restaurant/ourmenu/image01.png"
                className={styles.img}
                alt="Landscape picture"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
