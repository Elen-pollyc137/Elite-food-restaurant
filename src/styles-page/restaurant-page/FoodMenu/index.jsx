import styles from "./styles.module.scss";
import BoxTitle from "../../../Components/BoxTitle";

export default function FoodMenu() {
  const data = {
    title_bold: <>Our Food Menu</>,
    paragraph: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Varius
        sed pharetra dictum neque massa congue
      </>
    ),
  };
  const Options = [
    {
      id: 1,

      title: <>Alder Grilled Chinook Salmon</>,
      text: (
        <>
          Toasted French bread topped with romano, cheddar. <br /> 500 CAL{" "}
        </>
      ),
      price: <>32$</>,
    },
    {
      id: 2,

      title: <>Alder Grilled Chinook Salmon</>,
      text: (
        <>
          Toasted French bread topped with romano, cheddar <br />
          560 CAL
        </>
      ),
      price: <>32$</>,
    },
    {
      id: 3,

      title: <>Alder Grilled Chinook Salmon</>,
      text: (
        <>
          Toasted French bread topped with romano, cheddar <br />
          560 CAL
        </>
      ),
      price: <>32$</>,
    },
    {
      id: 4,

      title: <>Alder Grilled Chinook Salmon</>,
      text: (
        <>
          Toasted French bread topped with romano, cheddar <br />
          560 CAL
        </>
      ),
      price: <>32$</>,
    },
    {
      id: 5,

      title: <>Alder Grilled Chinook Salmon</>,
      text: (
        <>
          Toasted French bread topped with romano, cheddar <br />
          560 CAL
        </>
      ),
      price: <>32$</>,
    },
    {
      id: 6,

      title: <>Alder Grilled Chinook Salmon</>,
      text: (
        <>
          Toasted French bread topped with romano, cheddar <br />
          560 CAL
        </>
      ),
      price: <>32$</>,
    },
    {
      id: 7,

      title: <>Alder Grilled Chinook Salmon</>,
      text: (
        <>
          Toasted French bread topped with romano, cheddar <br />
          560 CAL
        </>
      ),
      price: <>32$</>,
    },
    {
      id: 8,

      title: <>Alder Grilled Chinook Salmon</>,
      text: (
        <>
          Toasted French bread topped with romano, cheddar <br />
          560 CAL
        </>
      ),
      price: <>32$</>,
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        {" "}
        <div className={styles.box_title}>
          <BoxTitle
            title_bold={data.title_bold}
            paragraph={data.paragraph}
            dark="dark"
          />
        </div>
        <div className={styles.box_menu}>
          <a href="#">
            <div className={styles.solution}>Brakfast</div>
          </a>
          <a href="#">
            <div className={styles.solution}>Lunch</div>
          </a>
          <a href="#">
            <div className={styles.solution}>Dinner</div>
          </a>
          <a href="#">
            <div className={styles.solution}>Dessert</div>
          </a>
          <a href="#">
            <div className={styles.solution}>Drink</div>
          </a>
          <a href="#">
            <div className={styles.solution}>Snack</div>
          </a>
          <a href="#">
            <div className={styles.solution}>Suops</div>
          </a>
        </div>
        <div className={styles.box_options}>
          {Options.map(({ id, title, text, price }) => (
            <div key={id} className={styles.option}>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <div>
                <p>
                  <strong>{price}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className={styles.box_button}>
          View menu
        </a>
      </div>
    </section>
  );
}
