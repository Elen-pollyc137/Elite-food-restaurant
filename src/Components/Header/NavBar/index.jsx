import styles from "./styles.module.scss";
import { IconSearch, Logo } from "./Icons";

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.floating}>
        <div className={styles.box_top}>
          <a href="#">
            <Logo />
          </a>
        </div>
        <div className={styles.box_botton}>
          <div className={styles.wrapper_links}>
            <a href="#">
              <div className={styles.solution}>Home</div>
            </a>
            <a href="#">
              <div className={styles.solution}>Menu</div>
            </a>
            <a href="#">
              <div className={styles.solution}>Blog</div>
            </a>
            <a href="#">
              <div className={styles.solution}>Pages</div>
            </a>
            <a href="#">
              <div className={styles.solution}>About</div>
            </a>
            <a href="#">
              <div className={styles.solution}>Shop</div>
            </a>
            <a href="#">
              <div className={styles.solution}>Contact</div>
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
