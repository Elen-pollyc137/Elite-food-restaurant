import BoxTitle from "../../Components/BoxTitle";
import styles from "./styles.module.scss";

export default function WhyChoseus() {
  const data = {
    title: <>Why Choose us</>,
    title_bold: (
      <>
        Exta ordinary taste <br /> And Experienced{" "}
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
        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br />
        consequat.
      </>
    ),
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_left}>
          <div className={styles.box_imgtop}>
            <picture className={styles.box_img}>
              <img
                src="Assets/restaurant/whychoseus/image01.png"
                className={styles.img}
                alt="Landscape picture"
              />
            </picture>
            <picture className={styles.box_img}>
              <img
                src="Assets/restaurant/whychoseus/image02.png"
                className={styles.img_02}
                alt="Landscape picture"
              />
            </picture>
          </div>
          <div className={styles.box_imgbotton}>
            <picture className={styles.box_img}>
              <img
                src="Assets/restaurant/whychoseus/image03.png"
                className={styles.img_03}
                alt="Landscape picture"
              />
            </picture>
            <picture className={styles.box_img}>
              <img
                src="Assets/restaurant/whychoseus/image04.png"
                className={styles.img_04}
                alt="Landscape picture"
              />
            </picture>
            <div className={styles.box_imgdual}>
              <picture className={styles.box_img}>
                <img
                  src="Assets/restaurant/whychoseus/image05.png"
                  className={styles.img_05}
                  alt="Landscape picture"
                />
              </picture>
              <picture className={styles.box_img}>
                <img
                  src="Assets/restaurant/whychoseus/image06.png"
                  className={styles.img_05}
                  alt="Landscape picture"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className={styles.box_right}>
          <BoxTitle
            title={data.title}
            title_bold={data.title_bold}
            paragraph={data.paragraph}
          />
        </div>
      </div>
    </section>
  );
}
