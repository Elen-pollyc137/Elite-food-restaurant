import BoxTitle from "../../../Components/BoxTitle";
import styles from "./styles.module.scss";
import IconPlay from "./icon";

export default function FoodWhyus() {
  const data = {
    title: <>About us</>,
    title_bold: (
      <>
        Food is an important <br /> part Of a balanced Diet
      </>
    ),
    paragraph: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam{" "}
        <br />
        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit{" "}
        <br />
        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis{" "}
        <br />
        vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </>
    ),
    paragraphtwo: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Varius sed pharetra dictum neque massa congue
      </>
    ),
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_top}>
          <div className={styles.box_imgs}>
            <div className={styles.box_img_left}>
              <picture>
                <img
                  src="Assets/restaurantpage/foodwhyus/image01.png"
                  className={styles.img_langer}
                  alt="Landscape picture"
                />
              </picture>
            </div>
            <div className={styles.box_img_right}>
              <picture>
                <img
                  src="Assets/restaurantpage/foodwhyus/image02.png"
                  className={styles.img_smaller_one}
                  alt="Landscape picture"
                />
              </picture>
              <picture>
                <img
                  src="Assets/restaurantpage/foodwhyus/image03.png"
                  className={styles.img_smaller}
                  alt="Landscape picture"
                />
              </picture>
            </div>
          </div>
          <div className={styles.box_title}>
            <BoxTitle
              title={data.title}
              title_bold={data.title_bold}
              paragraph={data.paragraph}
              dark="dark"
            />
            <div className={styles.box_buttons}>
              <div>
                <a href="#">
                  <div className={styles.button}>Read More</div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div className={styles.card}>
                    <IconPlay /> Play Video
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box_botton}>
          <BoxTitle
            title_bold="Food category"
            paragraph={data.paragraphtwo}
            dark="dark"
          />
          <div className={styles.box_cards}>
            {" "}
            <picture>
              <img
                src="Assets/restaurantpage/foodwhyus/image04.png"
                className={styles.img_cup}
                alt="Landscape picture"
              />
              <p>
                Grand Italiano <br />
                <strong>26 Item</strong>
              </p>
            </picture>{" "}
            <picture>
              <img
                src="Assets/restaurantpage/foodwhyus/image04.png"
                className={styles.img_cup}
                alt="Landscape picture"
              />
              <p>
                Pene Salmone
                <br />
                <strong>26 Item</strong>
              </p>
            </picture>{" "}
            <picture>
              <img
                src="Assets/restaurantpage/foodwhyus/image04.png"
                className={styles.img_cup}
                alt="Landscape picture"
              />
              <p>
                Molto Tagliatelle
                <br />
                <strong>26 Item</strong>
              </p>
            </picture>{" "}
            <picture>
              <img
                src="Assets/restaurantpage/foodwhyus/image04.png"
                className={styles.img_cup}
                alt="Landscape picture"
              />
              <p>
                Pepperoni tagli <br />
                <strong>26 Item</strong>
              </p>
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
