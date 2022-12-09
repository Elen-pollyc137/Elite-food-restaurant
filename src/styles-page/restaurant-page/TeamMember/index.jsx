import styles from "./styles.module.scss";
import BoxTitle from "../../../Components/BoxTitle";

export default function TeamMember() {
  const data = {
    title_bold: <>Team Member</>,
    paragraph: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Varius sed pharetra dictum neque massa congue
      </>
    ),
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <BoxTitle title_bold={data.title_bold} />
          <p>{data.paragraph}</p>
        </div>
        <div className={styles.box_cards}>
          {" "}
          <picture className={styles.img_cup}>
            <img
              src="Assets/restaurantpage/teammember/image02.png"
              className={styles.img}
              alt="Landscape picture"
            />
            <p>
              Grand Italiano <br />
              <strong>26 Item</strong>
            </p>
          </picture>{" "}
          <picture className={styles.img_cup}>
            <img
              src="Assets/restaurantpage/teammember/image02.png"
              className={styles.img}
              alt="Landscape picture"
            />
            <p>
              Pene Salmone
              <br />
              <strong>26 Item</strong>
            </p>
          </picture>{" "}
          <picture className={styles.img_cup}>
            <img
              src="Assets/restaurantpage/teammember/image02.png"
              className={styles.img}
              alt="Landscape picture"
            />
            <p>
              Molto Tagliatelle
              <br />
              <strong>26 Item</strong>
            </p>
          </picture>{" "}
          <picture className={styles.img_cup}>
            <img
              src="Assets/restaurantpage/teammember/image02.png"
              className={styles.img}
              alt="Landscape picture"
            />
            <p>
              Pepperoni tagli <br />
              <strong>26 Item</strong>
            </p>
          </picture>
        </div>
      </div>
    </section>
  );
}
