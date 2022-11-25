import styles from "./styles.module.scss";
import BoxTitle from "../../Components/BoxTitle";

export default function FoodCategory() {
  const data = {
    title: <> Food Category</>,
    title_bold: <>Choose Food Iteam</>,
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <BoxTitle title={data.title} title_bold={data.title_bold} />

        <div className={styles.box_group}>
          <div>
            <picture className={styles.box_img}>
              <img
                src="Assets/restaurant/foodcategory/image01.png"
                className={styles.img_group}
                alt="Landscape picture"
              />
            </picture>{" "}
          </div>
          <div>
            <picture className={styles.box_img}>
              <img
                src="Assets/restaurant/foodcategory/image02.png"
                className={styles.img_group}
                alt="Landscape picture"
              />
            </picture>{" "}
          </div>
          <div>
            <picture className={styles.box_img}>
              <img
                src="Assets/restaurant/foodcategory/image03.png"
                className={styles.img_group}
                alt="Landscape picture"
              />
            </picture>{" "}
          </div>
          <div>
            <picture className={styles.box_img}>
              <img
                src="Assets/restaurant/foodcategory/image04.png"
                className={styles.img_group}
                alt="Landscape picture"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
