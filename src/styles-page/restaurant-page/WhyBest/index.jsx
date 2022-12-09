import styles from "./styles.module.scss";
import BoxTitle from "../../../Components/BoxTitle";
import { IconCar, IconClock, IconFactory, IconSanduich } from "./icon";

export default function WhyBest() {
  const data = {
    title: <>Why Choose us</>,
    title_bold: <>Why We are the best?</>,
    paragraph: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        <br />
        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
        <br />
        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
        <br />
        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br />
        consequat <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Varius sed pharetra dictum neque massa congue.
      </>
    ),
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_image}>
          <picture>
            <img
              src="Assets/restaurantpage/whybest/image01.png"
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
          <div className={styles.box_cards}>
            <div className={styles.card}>
              <IconCar /> <p>Fast Delivery</p>
            </div>
            <div className={styles.card}>
              <IconSanduich /> <p>Fresh food</p>
            </div>
            <div className={styles.card}>
              <IconClock /> <p>24/7 services</p>
            </div>
            <div className={styles.card}>
              <IconFactory /> <p>Quality maintain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
