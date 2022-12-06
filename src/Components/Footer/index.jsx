import {
  IconFacebook,
  IconGlobal,
  IconInstagram,
  IconLinkedin,
  IconLogo,
  IconLogoLarger,
  IconMobile,
  IconPhone,
  IconWhatsApp,
  IconWrapper,
  IconYouTube,
} from "./icon";
import styles from "./styles.module.scss";

export default function Footer() {
  if (true) {
    return (
      <footer className={styles.container}>
        <div className={styles.box}>
          <div className={styles.box_1}>
            <strong className={styles.title}>Quer falar com a gente?</strong>
            <div className={styles.box__people}>
              <IconPhone />

              <span>0800 </span>
            </div>
            <div className={styles.box__people}>
              <IconMobile />
              <span>Ligações de celular</span>
            </div>
            <div className={styles.box__people}>
              <IconWhatsApp />
              <span>Atendimento via WhatsApp</span>
            </div>
            <strong className={styles.title}>Comercial</strong>
            <div className={styles.box__people}>
              <IconWrapper />
              <span>vendas@food.com.br</span>
            </div>
            <strong className={styles.title}>Atendimento a parceiros</strong>
            <div className={styles.box__people}>
              <IconWrapper />
              <span>parceiro@food.com.br</span>
            </div>
          </div>
          <div className={styles.box_1}>
            <strong className={styles.title}>Links úteis</strong>
            <ul>
              <a href="#">
                <a>About News Partners Team Menu Contacts</a>
              </a>
            </ul>
          </div>
          <div className={styles.box_1}>
            <strong className={styles.title}>Institucional</strong>
            <ul>
              <a href="#">
                <a>Trabalhe com a gente</a>
              </a>
              <a href="#">
                <a>Preferências de Cookies</a>
              </a>
              <a href="#">
                <a>Portal de privacidade</a>
              </a>
            </ul>

            <picture className={styles.stamp}>
              <img alt="" src="/Assets/footer/stamp.png" />
            </picture>
          </div>
        </div>

        <div className={styles.info}>
          <span>
            <strong>© 2022 Food.</strong> Todos os direitos reservados.
          </span>
          Logo
        </div>
      </footer>
    );
  } else {
    return (
      <footer className={styles.container}>
        <div className={styles.info}>
          <span>
            <strong>© 2022 Cappta.</strong> Todos os direitos reservados.
          </span>
          <IconLogo />
        </div>
      </footer>
    );
  }
}
