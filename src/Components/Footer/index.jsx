import {
  IconClock,
  IconMobile,
  IconPhone,
  IconSocial,
  IconWhatsApp,
  IconWrapper,
} from "./icon";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.info_up}>
        <span>
          <strong>Still You Need Our Support ?</strong> <br /> Don’t wait make a
          smart & logical quote here. Its pretty easy.
        </span>
        <div className={styles.card_email}>
          <input type="email" placeholder=" Enter Your Email" />
          <button>Subscribe Now</button>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.box_1}>
          <strong className={styles.title}>About Us.</strong>
          <div className={styles.box__people}>
            <p>
              Corporate clients and leisure travelers has been relying on
              Groundlink for dependab safe, and professional chauffeured car
              service in major cities across World.
            </p>
          </div>
          <div className={styles.icon_our}>
            <div>
              <IconClock />
            </div>
            <div>
              <p>
                Opening Houres <br />
                Mon - Sat(8.00 - 6.00) <br /> Sunday - Closed{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.box_1}>
          <strong className={styles.title}>Useful Links</strong>
          <ul>
            <a href="#">About</a>
            <a href="#">News</a>
            <a href="#">Partners</a>
            <a href="#">Team</a>
            <a href="#">Menu</a>
            <a href="#">Contacts</a>
          </ul>
        </div>
        <div className={styles.box_1}>
          <strong className={styles.title}>Help?</strong>
          <ul>
            <a href="#">FAQ</a>
            <a href="#">Term & conditions</a>
            <a href="#">Reporting</a>
            <a href="#">Documentation</a>
            <a href="#">Support</a>
            <a href="#">Policy Privacy</a>
          </ul>
        </div>
        <div className={styles.box_1}>
          <strong className={styles.title}>Recent Post</strong>
          <ul>
            <picture className={styles.stamp}>
              <img alt="" src="Assets/restaurant/footer/image01.png" />
              <p>
                <strong>20 Feb 2022</strong> <br /> Keep Your Business{" "}
              </p>
            </picture>
            <picture className={styles.stamp}>
              <img alt="" src="Assets/restaurant/footer/image02.png" />
              <p>
                <strong>20 Feb 2022</strong> <br /> Keep Your Business{" "}
              </p>
            </picture>
            <picture className={styles.stamp}>
              <img alt="" src="Assets/restaurant/footer/image03.png" />
              <p>
                <strong>20 Feb 2022</strong> <br /> Keep Your Business{" "}
              </p>
            </picture>
          </ul>
        </div>
      </div>

      <div className={styles.info}>
        <div>
          <span>
            <strong>© 2022 Food.</strong> Todos os direitos reservados.
          </span>
          <IconSocial />
        </div>
      </div>
    </footer>
  );
}
