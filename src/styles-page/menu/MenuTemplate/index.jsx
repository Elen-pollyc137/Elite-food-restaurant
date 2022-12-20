import IconCup from "./icon";
import styles from "./styles.module.scss";

export default function MenuTemplate({ data, title, img, imgright }) {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div>
          <picture className={styles.box_img}>
            <img src={img} className={styles.img} />
          </picture>
        </div>
        <div className={styles.box_title}>
          <div className={styles.title}>
            <IconCup />
            <h1>{title}</h1>
          </div>
          <div className={styles.box_options}>
            {data.map(({ id, title, text, price }) => (
              <article key={Math.random()}>
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
              </article>
            ))}
          </div>
        </div>
        <div>
          <picture className={styles.box_img}>
            <img src={imgright} className={styles.img} />
          </picture>
        </div>
      </div>
    </section>
  );
}
