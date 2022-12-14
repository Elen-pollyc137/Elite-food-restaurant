import styles from "./styles.module.scss";

export default function CoffeeMaker() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <picture className={styles.box_img}>
          <img
            src="Assets/coffee-shop/coffemaker/image01.png"
            className={styles.img}
            alt="Landscape picture"
          />
        </picture>
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
            <div className={styles.box_button_trans}>
              <a href="#">Learm More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
