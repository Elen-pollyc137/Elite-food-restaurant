import styles from "./styles.module.scss";

export default function CategoryCoffee() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <h1>Coffee Category</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Varius sed pharetra dictum neque massa congue
          </p>

          <div className={styles.box_btn}>
            <div className={styles.box_button_trans}>
              <a href="#">Learm More</a>
            </div>
          </div>
        </div>
        <div className={styles.box_right}> </div>
      </div>
    </section>
  );
}
