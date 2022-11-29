import BoxTitle from "../../Components/BoxTitle";
import styles from "./styles.module.scss";

export default function Testimonials() {
  const data = {
    title: <>Testimonials</>,
    title_bold: <>What our client are saying</>,
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <BoxTitle title={data.title} title_bold={data.title_bold} />
        </div>
        <div className={styles.box_cards}> </div>
      </div>
    </section>
  );
}
