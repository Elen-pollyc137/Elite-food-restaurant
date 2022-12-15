import styles from "./styles.module.scss";
import BoxTitle from "../../../Components/BoxTitle/index";
import { IconArrow, IconCalendar, IconUser } from "./icon";

export default function LatestCoffee() {
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
      img: "Assets/coffee-shop/latestcoffee/image01.png",
      date: <>02 Jan 2022 </>,
      comments: <>Comments (03)</>,
      title: (
        <>
          Simple coffee Recipes for Next <br />
          Spring !
        </>
      ),
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur elit. Non mi <br /> sed etiam
          a id at ultricies neque.Tempus,poten diam <br /> ac integer id tellus
          est.
        </>
      ),
      button: <>Read more</>,
    },
    {
      id: 2,
      img: "Assets/coffee-shop/latestcoffee/image01.png",
      date: <>02 Jan 2022 </>,
      comments: <>Comments (03)</>,
      title: (
        <>
          Simple coffee Recipes for Next <br />
          Spring !
        </>
      ),
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur elit. Non mi <br /> sed etiam
          a id at ultricies neque.Tempus,poten diam <br /> ac integer id tellus
          est.
        </>
      ),
      button: <>Read more</>,
    },
    {
      id: 3,
      img: "Assets/coffee-shop/latestcoffee/image01.png",
      date: <>02 Jan 2022 </>,
      comments: <>Comments (03)</>,
      title: (
        <>
          Simple coffee Recipes for Next <br />
          Spring !
        </>
      ),
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur elit. Non mi <br /> sed etiam
          a id at ultricies neque.Tempus,poten diam <br /> ac integer id tellus
          est.
        </>
      ),
      button: <>Read more</>,
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
          {Icon.map(({ id, img, date, comments, title, text, button }) => (
            <div key={id} className={styles.options}>
              <div>
                <picture>
                  <img src={img} alt="avatar" />
                </picture>
              </div>
              <div>
                <div className={styles.box_data}>
                  <IconCalendar />
                  <p>{date}</p>
                  <IconUser />
                  <p>{comments}</p>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#" className={styles.box_button}>
                  {button} <IconArrow />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
