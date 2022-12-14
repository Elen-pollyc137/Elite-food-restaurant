import styles from "./styles.module.scss";

export default function CategoryCoffee() {
  const Category = [
    {
      id: 1,
      img: "Assets/coffee-shop/coffeecategory/image01.png",
      title: <>Cappuccino</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Leo
          augue nibh est nisi.
        </>
      ),
    },
    {
      id: 2,
      img: "Assets/coffee-shop/coffeecategory/image02.png",
      title: <>Cafe latte</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Leo
          augue nibh est nisi.
        </>
      ),
    },
    {
      id: 3,
      img: "Assets/coffee-shop/coffeecategory/image03.png",
      title: <>Dark coffee</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Leo
          augue nibh est nisi.
        </>
      ),
    },
  ];
  const Categoryright = [
    {
      id: 1,
      img: "Assets/coffee-shop/coffeecategory/image04.png",
      title: <>Turkish coffee</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Leo
          augue nibh est nisi.
        </>
      ),
    },
    {
      id: 2,
      img: "Assets/coffee-shop/coffeecategory/image05.png",
      title: <>Pancakes</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Leo
          augue nibh est nisi.
        </>
      ),
    },
    {
      id: 3,
      img: "Assets/coffee-shop/coffeecategory/image06.png",
      title: <>Coffee Bag</>,
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
        <div className={styles.box_title}>
          <h1>Coffee Category</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Varius sed pharetra dictum neque massa congue
          </p>
        </div>
        <div className={styles.box_right}>
          <div className={styles.box_cards}>
            {Category.map(({ id, img, title, text }) => (
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
          <div className={styles.box_img}> </div>
          <div className={styles.box_cards_right}>
            {Categoryright.map(({ id, img, title, text }) => (
              <div key={id} className={styles.options}>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>{" "}
                </div>{" "}
                <div>
                  <img src={img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
