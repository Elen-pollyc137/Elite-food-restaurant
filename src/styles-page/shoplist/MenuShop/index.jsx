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
          {data.map(({ id, name, profession, image }) => (
            <article key={Math.random()}>
              <div key={id} className={styles.option}>
                <img src={image} alt="" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
