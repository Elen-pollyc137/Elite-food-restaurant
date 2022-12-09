import BoxTitle from "../../../Components/BoxTitle";
import styles from "./styles.module.scss";
import IconPlay from "./icon";

export default function FoodWhyus() {
  const data = {
    title: <>Restaurant Active Process</>,
    title_bold: (
      <>
        We Document Every Food <br />
        Bean Process untile it is saved
      </>
    ),
    paragraph: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque <br /> bibendum non dui volutpat fringilla bibendum. Urna,
        elit augue urna,
      </>
    ),
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_top}>
          <div className={styles.box_imgs}>
            <picture className={styles.box_img}>
              <img
                src="Assets/restaurantpage/foodwhyus/image01.png"
                className={styles.img}
                alt="Landscape picture"
              />
            </picture>
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
                    <IconPlay /> Play VideoS
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box_botton}>
          {" "}
          <div className={styles.box_cards}> </div>
        </div>
      </div>
    </section>
  );
}
