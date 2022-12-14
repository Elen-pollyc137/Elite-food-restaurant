import styles from "./styles.module.scss";

export default function MeetCoffee() {
  const Categoryright = [
    {
      id: 1,
      img: "Assets/coffee-shop/meetcoffee/image01.png",
      title: <>Bulbul Hassan</>,
      text: <>Chef</>,
    },
    {
      id: 2,
      img: "Assets/coffee-shop/meetcoffee/image02.png",
      title: <>Jorina Begum</>,
      text: <>Fouder</>,
    },
    {
      id: 3,
      img: "Assets/coffee-shop/meetcoffee/image03.png",
      title: <>M.Mohammad Nur</>,
      text: <>Seacialist</>,
    },
    {
      id: 4,
      img: "Assets/coffee-shop/meetcoffee/image04.png",
      title: <>Munna Kathy</>,
      text: <>Owner</>,
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <h1>Meet our chef</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Varius sed pharetra dictum neque
          </p>
        </div>
        <div className={styles.box_cards}>
          {Categoryright.map(({ id, img, title, text }) => (
            <div key={id} className={styles.options}>
              <div>
                <img src={img} alt="" />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
