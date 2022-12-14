import IconNumber from "./icon";
import styles from "./styles.module.scss";

export default function CustomerCoffee() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <h3>Testimonials</h3>
          <h1>Our customer say</h1>
          <IconNumber />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo <br />
            augue nibh est nisi, ultricies. Consectetur et faucibus
            <br /> vivamus lorem hendrerit enim donec ut. Nec blandit <br />
            vulputate varius at quis non.
          </p>
          <div className={styles.box_cards}>
            <h3></h3>
            <picture>
              <img
                src="Assets/coffee-shop/customercoffee/image03.png"
                className={styles.img}
                alt="Landscape picture"
              />
            </picture>
            <h3>William carry</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
}
