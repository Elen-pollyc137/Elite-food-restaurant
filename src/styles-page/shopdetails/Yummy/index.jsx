import styles from "./styles.module.scss";

export default function Yummy() {
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
          <div className={styles.box_title}> </div>
          <div className={styles.box_price}> </div>
          <div className={styles.box_info}> </div>
        </div>
      </div>
    </section>
  );
}
