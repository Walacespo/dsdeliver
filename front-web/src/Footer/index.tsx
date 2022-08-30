import './styles.css';
import { ReactComponent as Github } from './github.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as IstagramIcon } from './instagram.svg';


function Footer() {
  return (
    <footer className="main-footer">
      App delivery
      <div className="footer-icons">
        <a href="https://github.com/Walacespo" target="_new">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/walace-pav%C3%A3o/" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/proeminente.informatica/">
          <IstagramIcon />
        </a>
      </div>
    </footer>
  )
}

export default Footer;