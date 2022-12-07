import styles from "./styles.module.scss";
import BoxTitle from "../../Components/BoxTitle";
import { IconChat, IconLike, IconShare } from "./icon";

export default function LastestBlog() {
  const data = {
    title: <>Blog Post</>,
    title_bold: <>Latest News & Blog</>,
  };
  const Options = [
    {
      id: 1,
      img: "Assets/restaurant/lastestblog/image01.png",
      title: <>10 February 2022 </>,
      text: <>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</>,
      price: <>Learn More</>,
    },
    {
      id: 2,
      img: "Assets/restaurant/lastestblog/image02.png",
      title: <>10 February 2022 </>,
      text: <>Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</>,
      price: <>Learn More</>,
    },
    {
      id: 3,
      img: "Assets/restaurant/lastestblog/image03.png",
      title: <>10 February 2022 </>,
      text: <>Curabitur rutrum velit ac congue malesuada</>,
      price: <>Learn More</>,
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <BoxTitle
            title={data.title}
            title_bold={data.title_bold}
            paragraph={data.paragraph}
          />
        </div>
        <div className={styles.box_botton}>
          <div className={styles.cards}>
            {Options.map(({ id, img, title, text, price }) => (
              <div key={id} className={styles.option}>
                <div>
                  <img src={img} alt="" />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <div className={styles.cards_botton}>
                  <strong>Learn More</strong>
                  <div>
                    <IconLike /> <IconChat /> <IconShare />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
