import classes from "../styles/Nav.module.css";
import Account from './Account.jsx';
import logo from '../assets/images/logo-bg.png'

export default function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classes.brand}>
                        <img src={logo} alt="Learn with Famid Logo" />
                        <h3>Learn with Famid</h3>
                    </a>
                </li>
            </ul>
            
            <Account />
      </nav>
    );
    
}