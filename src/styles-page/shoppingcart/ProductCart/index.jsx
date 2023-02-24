import styles from "./styles.module.scss";

export default function ProductCart() {
  const data = [
    {
      id: 1,
      img: "Assets/shoppingcart/image01.png",
      details: <>Burguer</>,
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
          {data.map(({ id, img, details, price }) => (
            <div key={id} className={styles.options}>
              <div className={styles.opt_name}>
                <img src={img} alt="" />
                <p>{details}</p>
              </div>
              <p>{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
