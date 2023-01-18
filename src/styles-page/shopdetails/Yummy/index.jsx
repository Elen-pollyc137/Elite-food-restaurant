import styles from "./styles.module.scss";
import BoxTitle from "../../../Components/BoxTitle";

import { useState } from "react";
import { IconFace } from "../../HeaderHero/icon";
import { IconBag, IconGitdiff, IconHeart, IconShare, IconStar } from "./icon";

export default function Yummy() {
  const date = {
    title: <>In stock</>,
    title_bold: <>Yummy Chicken Chup</>,
    paragraph: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        <br /> pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
        urna, <br /> vitae feugiat pretium donec id elementum. Ultrices mattis
        sed vitae <br /> mus risus. Lacus nisi, et ac dapibus sit eu velit in
        consequat.
      </>
    ),
  };
  const [contador, setContador] = useState(0);

  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_left}>
          <picture className={styles.box_image}>
            <img
              src="Assets/shopdetails/yummy/image01.png"
              className={styles.img}
            />
          </picture>
        </div>
        <div className={styles.box_rigth}>
          <div className={styles.box_title}>
            <h3>{date.title}</h3>
            <BoxTitle
              title_bold={date.title_bold}
              paragraph={date.paragraph}
              dark="dark"
            />
          </div>
          <div className={styles.box_price}>
            <h3>54.00$</h3>
            <div className={styles.rating}>
              <IconStar />
              <p>
                <strong>|</strong> 5.0 Rating
              </p>
              <p>
                <strong>|</strong> 22 Review
              </p>
            </div>
            <div className={styles.button}>
              <div className={styles.btn_count}>
                <button onClick={() => setContador(contador - 1)}>-</button>
                <p>{contador}</p>
                <button onClick={() => setContador(contador + 1)}>+</button>
              </div>
              <div className={styles.btn_add}>
                <button>
                  <IconBag />
                  <p> Add to cart</p>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.box_info}>
            <div className={styles.info_add}>
              <IconHeart />
              <p>Add to Wshlist</p> <IconGitdiff />
              <p>Compare</p>
            </div>
            <div>
              <p>
                <strong>Category:</strong> Pizza
              </p>
            </div>

            <div>
              <p>
                <strong>Tag:</strong> Our Shop
              </p>
            </div>
            <div>
              <p>
                <strong>Share:</strong> <IconShare />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
