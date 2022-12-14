import styles from "./styles.module.scss";

export default function BestMaker() {
  const Categoryright = [
    {
      id: 1,
      img: "Assets/coffee-shop/bestmaker/image02.png",
      title: <>High quality coffee</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Leo
          augue nibh est nisi.
        </>
      ),
    },
    {
      id: 2,
      img: "Assets/coffee-shop/bestmaker/image03.png",
      title: <>Best chef & Team</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Leo
          augue nibh est nisi.
        </>
      ),
    },
    {
      id: 3,
      img: "Assets/coffee-shop/bestmaker/image04.png",
      title: <>Promo and deal</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Leo
          augue nibh est nisi.
        </>
      ),
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <picture className={styles.box_img}>
          <img
            src="Assets/coffee-shop/bestmaker/image01.png"
            className={styles.img}
            alt="Landscape picture"
          />
        </picture>
        <div className={styles.box_title}>
          <h3>Why Choose us</h3>
          <h1>
            Best quality food and <br />
            coffee maker
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam <br /> pellentesque bibendum non dui volutpat fringilla
            bibendum. Urna, elit augue <br /> urna, vitae feugiat donec id
            elementum. Ultrices mattis sed vitae mus risus. <br /> Lacus nisi,
          </p>
          <div className={styles.box_cards_right}>
            {Categoryright.map(({ id, img, title, text }) => (
              <div key={id} className={styles.options}>
                <div>
                  <img src={img} alt="" />
                </div>{" "}
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>{" "}
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
