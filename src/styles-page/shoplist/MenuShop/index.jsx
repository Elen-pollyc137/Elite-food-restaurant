import styles from "./styles.module.scss";
import { useState } from "react";

const datashoplist = [
  "sandwiches",
  "Chicken",
  "Pizza",
  "Drink",
  "Burger",
  "Muffin",
  "Lime",
  "Fresh",
];

export default function MenuShop() {
  const [busca, setBusca] = useState("");
  const frutasFiltradas = datashoplist.filter((fruta) =>
    fruta.startsWith(busca)
  );

  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div>
          <h1>Nome</h1>
          <input
            type="text"
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          />
        </div>
        <div>
          <ul>
            {frutasFiltradas.map((fruta) => (
              <li key={fruta}>{fruta}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
