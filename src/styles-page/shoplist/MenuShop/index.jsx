import styles from "./styles.module.scss";
function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      fill="none"
      viewBox="0 0 46 46"
    >
      <path fill="#FF9F0D" d="M46 0H0v46h46V0z"></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22.063 28.625a6.562 6.562 0 100-13.125 6.562 6.562 0 000 13.125zM26.703 26.703L30.5 30.5"
      ></path>
    </svg>
  );
}

export default function MenuShop({ data }) {
  const Optionscheck = [
    {
      id: 1,
      name: "Sandwiches",
    },
    {
      id: 2,
      name: "Burger",
    },
    {
      id: 3,
      name: "Chicken Chup",
    },
    {
      id: 4,
      name: "Drink",
    },
    {
      id: 5,
      name: "Pizza",
    },
    {
      id: 6,
      name: "Uncategorized",
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
          <div className={styles.box_search}>
            <input type="text" />
            <Icon />
          </div>
          <div className={styles.box_check}>
            {Optionscheck.map(({ id, name }) => (
              <div key={id} className={styles.checkbox_rect}>
                <input type="checkbox" id="checkbox-rect1" name="check" />
                <label for="checkbox-rect1">{name}</label>
              </div>
            ))}
          </div>
          <picture className={styles.box_image}>
            <img
              src="Assets/shoplist/menushop/image10.png"
              className={styles.img}
            />
          </picture>
          <div>
            <input type="range" />
          </div>
          <div className={styles.box_card}>
            <div className={styles.link_card}> </div>
          </div>
          <div className={styles.box_link}>
            {" "}
            <div>
              <a href="#">Services</a>
              <a href="#">Our Menu</a>
              <a href="#">Pizza</a>
            </div>
            <div>
              <a href="#">Cupcake</a>
              <a href="#">Burger</a>
              <a href="#">Cookies</a>
            </div>
            <div>
              <a href="#">Our Shop</a>
              <a href="#">Tandoori Chicken</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
