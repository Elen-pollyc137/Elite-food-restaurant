import BoxTitle from "../../../Components/BoxTitle";
import { IconArrowRight, IconComent, IconDate } from "./icon";
import styles from "./styles.module.scss";

export default function LatestBlog() {
  const data = {
    title_bold: <>Latest news & Blog</>,
    paragraph: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Varius sed pharetra dictum neque massa congue
      </>
    ),
  };
  const Icon = [
    {
      id: 1,
      img: "Assets/restaurantpage/lasterblog/image02.png",
      date: (
        <>
          <IconDate /> 02 Jan 2022 <IconComent /> Comments (03)
        </>
      ),
      title: <>Chocolate Truffle Cake With Honey Flavor</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur elit. Non mi <br /> sed etiam
          a id at ultricies neque.Tempus,poten diam <br /> ac integer id tellus
          est.
        </>
      ),
      button: (
        <>
          Read more <IconArrowRight />
        </>
      ),
    },
    {
      id: 2,
      img: "Assets/restaurantpage/lasterblog/image02.png",
      date: (
        <>
          <IconDate /> 02 Jan 2022 <IconComent /> Comments (03)
        </>
      ),
      title: <>Chocolate Truffle Cake With Honey Flavor</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur elit. Non mi <br /> sed etiam
          a id at ultricies neque.Tempus,poten diam <br /> ac integer id tellus
          est.
        </>
      ),
      button: (
        <>
          Read more <IconArrowRight />
        </>
      ),
    },
    {
      id: 3,
      img: "Assets/restaurantpage/lasterblog/image02.png",
      date: (
        <>
          <IconDate /> 02 Jan 2022 <IconComent /> Comments (03)
        </>
      ),
      title: <>Chocolate Truffle Cake With Honey Flavor</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur elit. Non mi <br /> sed etiam
          a id at ultricies neque.Tempus,poten diam <br /> ac integer id tellus
          est.
        </>
      ),
      button: (
        <>
          Read more <IconArrowRight />
        </>
      ),
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <BoxTitle
            title_bold={data.title_bold}
            paragraph={data.paragraph}
            dark="dark"
          />
        </div>
        <div className={styles.box_cards}>
          {Icon.map(({ id, img, date, title, text, button }) => (
            <div key={id} className={styles.options}>
              <div>
                <picture>
                  <img src={img} alt="avatar" />
                </picture>
              </div>
              <div>
                <p>{date}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#">{button}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
