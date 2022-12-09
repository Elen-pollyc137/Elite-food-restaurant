import styles from "./styles.module.scss";
import { IconSearch } from "./Icons";

function NavBar({
  home,
  menu,
  blog,
  page,
  about,
  shop,
  contact,
  Icon,
  IconSecondary,
  dark,
}) {
  return (
    <nav className={styles.container}>
      <div className={styles.floating}>
        <div className={styles.box_top}>
          <a href="#">{Icon}</a>
        </div>
        <div className={styles.box_botton}>
          <div
            className={
              !!dark ? styles.wrapper_links_dark : styles.wrapper_links
            }
          >
            <a href="#">
              <div className={styles.solution}>{IconSecondary}</div>
            </a>
            <a href="/">
              <div className={styles.solution}>{home}</div>
            </a>
            <a href="/restaurant">
              <div className={styles.solution}>{menu}</div>
            </a>
            <a href="#">
              <div className={styles.solution}>{blog}</div>
            </a>
            <a href="#">
              <div className={styles.solution}>{page}</div>
            </a>
            <a href="#">
              <div className={styles.solution}>{about}</div>
            </a>
            <a href="#">
              <div className={styles.solution}>{shop}</div>
            </a>
            <a href="#">
              <div className={styles.solution}>{contact}</div>
            </a>
          </div>
          <div className={styles.box_search}>
            <div>
              <input type="search" placeholder="Search" />
            </div>
            <div>
              <IconSearch />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
