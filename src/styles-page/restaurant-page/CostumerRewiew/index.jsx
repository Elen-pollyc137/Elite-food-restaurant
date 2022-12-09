import { useEffect, useRef, useState } from "react";
import useDeviceSize from "../../../hooks/useDeviceSize";
import styles from "./styles.module.scss";
import BoxTitle from "../../../Components/BoxTitle";
import { IconArrowClear, IconArrowDark, IconNumber } from "./icon";

export default function CostumerRewiew({ data }) {
  const carrosel = useRef();
  const [move, setMove] = useState(data.length - 2);

  const [width] = useDeviceSize();
  const [screen, setScreen] = useState();
  useEffect(() => {
    if (width >= 1900) {
      setScreen(20);
    }
    if (width >= 1024 && width <= 1899) {
      setScreen(16);
    }
  }, [width]);

  const handlerLeftClick = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft -= 27 * screen;
    setMove(move + 1);
  };
  const handlerRightClick = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft += 27 * screen;
    setMove(move - 1);
  };
  const info = {
    title: <>Testimonials</>,
    title_bold: <>Customer Review</>,
    paragraph: (
      <>
        <IconNumber />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam{" "}
        <br />
        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
        augue <br /> urna, vitae feugiat pretium donec id elementum. Ultrices
        mattis sed vitae <br /> mus risus. Lacus nisi, et ac dapibus sit eu
        velit in consequat.
      </>
    ),
  };

  return (
    <section className={styles.container}>
      <div className={styles.box}>
        {" "}
        <div className={styles.box_title}>
          <BoxTitle
            title={info.title}
            title_bold={info.title_bold}
            paragraph={info.paragraph}
            dark="dark"
          />
          <div className={styles.cards}>
            <main ref={carrosel}>
              {data.map(({ name, image, profession, content }) => (
                <article key={Math.random()}>
                  <div className={styles.wrapper__peoples}>
                    <picture>
                      <img src={image} alt="avatar" />
                    </picture>

                    <div>
                      <strong>{name}</strong>
                      <span>{profession}</span>
                    </div>
                  </div>
                </article>
              ))}
              <article style={{ background: "transparent" }} />
            </main>
            <div className={styles.box_buttons}>
              <button
                className={styles.button_left}
                onClick={handlerLeftClick}
                disabled={move === data.length - 2}
              >
                {move == data.length - 2 ? (
                  <IconArrowClear />
                ) : (
                  <IconArrowClear />
                )}
              </button>
              <button
                className={styles.button_left}
                onClick={handlerRightClick}
                disabled={move === 0}
              >
                {move !== 0 ? <IconArrowDark /> : <IconArrowDark />}
              </button>
            </div>
          </div>{" "}
        </div>
        <div className={styles.box_right}>
          <picture className={styles.box_img}>
            <img
              src="Assets/restaurantpage/costumerrewiew/image01.png"
              className={styles.img}
              alt="Landscape picture"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
