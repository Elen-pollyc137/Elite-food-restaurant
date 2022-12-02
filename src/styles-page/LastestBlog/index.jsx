import styles from "./styles.module.scss";
import BoxTitle from "../../Components/BoxTitle";

export default function LastestBlog() {
  const data = {
    title: <>Blog Post</>,
    title_bold: <>Latest News & Blog</>,
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <BoxTitle
            title={data.title}
            title_bold={data.title_bold}
            paragraph={data.paragraph}
          />
        </div>
      </div>
    </section>
  );
}
