import BoxTitle from "../../Components/BoxTitle";
import IconCheck from "./icon";
import styles from "./styles.module.scss";

export default function Aboutus() {
  const data = {
    title: <>About us</>,
    title_bold: (
      <>
        We Create the best <br />
        foody product
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
  const Icons = [
    {
      id: 1,
      Icon: () => <IconCheck />,
      text: <> Lacus nisi, et ac dapibus sit eu velit in consequat.</>,
    },
    {
      id: 2,
      Icon: () => <IconCheck />,
      text: (
        <> Quisque diam pellentesque bibendum non dui volutpat fringilla </>
      ),
    },
    {
      id: 3,
      Icon: () => <IconCheck />,
      text: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit</>,
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_left}>
          <div className={styles.box_title}>
            <BoxTitle
              title={data.title}
              title_bold={data.title_bold}
              paragraph={data.paragraph}
            />
          </div>
          <div className={styles.box_cards}>
            {Icons.map(({ id, Icon, text }) => (
              <div key={id} className={styles.cards}>
                <div>
                  <Icon />
                </div>
                <div>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.box_button}>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className={styles.box_right}>
          <div>
            {" "}
            <picture className={styles.box_img}>
              <img
                src="Assets/restaurant/aboutus/image01.png"
                className={styles.img}
                alt="Landscape picture"
              />
            </picture>
          </div>
          <div className={styles.box_group}>
            <div>
              <picture className={styles.box_img}>
                <img
                  src="Assets/restaurant/aboutus/image02.png"
                  className={styles.img_group}
                  alt="Landscape picture"
                />
              </picture>{" "}
            </div>
            <div>
              <picture className={styles.box_img}>
                <img
                  src="Assets/restaurant/aboutus/image03.png"
                  className={styles.img_group}
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
