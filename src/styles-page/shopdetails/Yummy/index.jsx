import styles from "./styles.module.scss";
import BoxTitle from "../../../Components/BoxTitle";

export default function Yummy() {
  const date = {
    title: <>In stock</>,
    title_bold: <>Yummy Chicken Chup</>,
    paragraph: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        <br /> pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
        urna, <br /> vitae feugiat pretium donec id elementum. Ultrices mattis
        sed vitae <br /> mus risus. Lacus nisi, et ac dapibus sit eu velit in
        consequat.
      </>
    ),
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_left}>
          <picture className={styles.box_image}>
            <img
              src="Assets/shopdetails/yummy/image01.png"
              className={styles.img}
            />
          </picture>
        </div>
        <div className={styles.box_rigth}>
          <div className={styles.box_title}>
            <h3>{date.title}</h3>
            <BoxTitle
              title_bold={date.title_bold}
              paragraph={date.paragraph}
              dark="dark"
            />
          </div>
          <div className={styles.box_price}> </div>
          <div className={styles.box_info}> </div>
        </div>
      </div>
    </section>
  );
}
