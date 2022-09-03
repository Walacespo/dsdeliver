import './styles.css';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
//import { ReactComponent as GitHub } from './github.svg';

function Footer() {
  return (
    <footer className="main-footer">
      Walace da Silva 
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/walace-pav%C3%A3o/" target="_new">
          <LinkedinIcon />
        </a>
      </div>
    </footer>
  )
}

export default Footer;