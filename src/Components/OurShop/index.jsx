import IconCaretRight from "./icon";
import styles from "./styles.module.scss";

export default function OurShop({ title, link }) {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <h1>{title}</h1>
        <div>
          <p>
            Home{" "}
            <strong>
              <IconCaretRight />
            </strong>
          </p>{" "}
          <a href="#">{link}</a>
        </div>
      </div>
    </section>
  );
}
