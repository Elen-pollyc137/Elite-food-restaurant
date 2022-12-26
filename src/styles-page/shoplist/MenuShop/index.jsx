import styles from "./styles.module.scss";

export default function MenuShop({ data }) {
  const datashoplist = [
    {
      id: 1,
      name: "Abdur Rahman",
      profession: "Customer",
      image: "/Assets/shoplist/menushop/image01.png",
    },
    {
      id: 2,
      name: "Maik",
      profession: "Customer",
      image: "/Assets/shoplist/menushop/image02.png",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_options}>
          {data.map(({ id, menu, price, image }) => (
            <article key={Math.random()}>
              <div key={id} className={styles.option}>
                <img src={image} alt="" />
                <h3>{menu}</h3>
                <p>{price}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.box_right}>
          <input type="text" />
        </div>
      </div>
    </section>
  );
}
