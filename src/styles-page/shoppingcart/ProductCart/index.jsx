import styles from "./styles.module.scss";

export default function ProductCart() {
  const data = [
    {
      id: 1,
      img: "Assets/restaurant/testimonials/image01.png",
      price: <>$ 35,00</>,
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_info}>
          <h3>Product</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
          <h3>Remove</h3>
        </div>
        <div className={styles.box_options}>
          {data.map(({ id, img, price }) => (
            <div key={id} className={styles.options}>
              <img src={img} alt="" />
              <p>{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
