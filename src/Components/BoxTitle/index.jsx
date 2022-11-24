import styles from "./styles.module.scss";
import React from "react";
function BoxTitle({ title, title_bold, paragraph, dark }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <h1 className={!!dark ? styles.title_bold_black : styles.title_bold}>
        {title_bold}
      </h1>
      <p className={styles.paragraph}>{paragraph}</p>
    </>
  );
}

export default BoxTitle;
