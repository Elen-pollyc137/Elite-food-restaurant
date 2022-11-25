import { IconChef, IconCutlery, IconFood, IconPizza } from "./icon";
import styles from "./styles.module.scss";

export default function Clientsus() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_cards}>
          <div className={styles.card}>
            <IconChef />
            <p>Professional Chefs</p>
            <h1>420</h1>
          </div>
          <div className={styles.card}>
            <IconFood />
            <p>Items Of Food</p>
            <h1>320</h1>
          </div>
          <div className={styles.card}>
            <IconCutlery />
            <p>Years Of Experienced</p>
            <h1>30+</h1>
          </div>
          <div className={styles.card}>
            <IconPizza />
            <p>Happy Customers</p>
            <h1>220</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
