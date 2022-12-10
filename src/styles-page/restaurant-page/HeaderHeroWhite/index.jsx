import styles from "./styles.module.scss";
import BoxTitle from "../../../Components/BoxTitle/index";
import Link from "next/link";

export default function HeaderHeroWhite() {
  const title_bold = (
    <>
      Enjoy Healthy Life
      <br /> & Testy Food.
    </>
  );
  const paragraph = (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
      Varius sed pharetra dictum neque massa congue
    </>
  );
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_left}>
          <BoxTitle
            dark="dark"
            title="Healthy & Testy Food"
            title_bold={title_bold}
            paragraph={paragraph}
          />
          <div className={styles.box_buttons}>
            <div className={styles.button}>
              <a href="#">Show more</a>
            </div>
            <Link href="/restaurant#menu" className={styles.button_transparent}>
              Place an order
            </Link>
          </div>
        </div>
        <div className={styles.box_right}>
          {" "}
          <picture className={styles.box_img}>
            <img
              src="Assets/restaurantpage/headerhero/image02.png"
              className={styles.img}
              alt="Landscape picture"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
