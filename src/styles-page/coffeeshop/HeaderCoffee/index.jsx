import styles from "./styles.module.scss";

export default function HeaderCoffee() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
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
            <div className={styles.box_button}>
              <a href="#">See Menu</a>
            </div>
            <div className={styles.box_button_trans}>
              <a href="#">See Menu</a>
            </div>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.box_img}> </div>
        </div>
      </div>
    </section>
  );
}
