import styles from "./styles.module.scss";
import BoxTitle from "../../Components/BoxTitle/index";
import {
  IconFace,
  IconPin,
  IconTwiter,
} from "../../Components/Header/NavBar/Icons";

export default function HeaderHero() {
  const data = {
    title_bold: (
      <>
        The Art of speed <br /> food Quality
      </>
    ),
    paragraph: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Varius sed pharetra dictum neque massa congue
      </>
    ),
  };

  return (
    <section className={styles.container}>
      <div className={styles.box_background}>
        <div className={styles.box}>
          <div className={styles.box_left}>
            <div className={styles.box_line}>
              <div className={styles.line}> </div>
              <div>
                <IconFace />
              </div>
              <div>
                <IconTwiter />
              </div>
              <div>
                <IconPin />
              </div>
              <div className={styles.line}> </div>
            </div>
            <div className={styles.box_title}>
              <BoxTitle
                title="Its Quick & Amusing!"
                title_bold={data.title_bold}
                paragraph={data.paragraph}
              />
              <div className={styles.box_button}>
                <a href="#">See Menu</a>
              </div>
            </div>
          </div>
          <div className={styles.box_right}>
            <div>
              <picture className={styles.box_img}>
                <img
                  src="Assets/restaurant/headerhero/image01.png"
                  className={styles.img}
                  alt="Landscape picture"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
