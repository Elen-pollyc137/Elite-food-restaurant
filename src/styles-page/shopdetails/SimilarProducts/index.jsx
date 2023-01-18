import styles from "./styles.module.scss";

export default function SimilarProducts() {
  const data = [
    {
      id: 1,
      title: "Fresh Lime",
      price: "$38.00",
      img: "/Assets/shopdetails/similarproducts/image01.png",
    },
    {
      id: 2,
      title: "Chocolate Muffin",
      price: "$28.00",
      img: "/Assets/shopdetails/similarproducts/image02.png",
    },
    {
      id: 3,
      title: "Chocolate Muffin",
      price: "$21.00",
      img: "/Assets/shopdetails/similarproducts/image03.png",
    },
    {
      id: 4,
      title: "Fresh Lime",
      price: "$38.00",
      img: "/Assets/shopdetails/similarproducts/image01.png",
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <h3>Similar Products</h3>
        </div>
        <div className={styles.box_options}>
          {data.map(({ id, title, img, price }) => (
            <div key={id} className={styles.options}>
              <img src={img} alt="" />
              <h3>{title}</h3>
              <p>{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
