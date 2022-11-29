import BoxTitle from "../../Components/BoxTitle";
import styles from "./styles.module.scss";

export default function OurMenu() {
  const data = {
    title: <>Choose & pick</>,
    title_bold: <>From Our Menu</>,
  };
  const Options = [
    {
      id: 1,
      img: "Assets/restaurant/ourmenu/image01.png",
      title: <>Lettuce Leaf</>,
      text: <>Lacus nisi, et ac dapibus velit in consequat.</>,
      price: <>12.5$</>,
    },
  ];

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
          <div className={styles.box_options}>
            {Options.map(({ id, img, title, text, price }) => (
              <div key={id} className={styles.option}>
                <div>{img}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <p>
                  <strong>{price}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
