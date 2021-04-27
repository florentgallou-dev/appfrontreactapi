import {Link} from "react-router-dom";
import logo from './img/sw_logo.png';

function Header() {
    return (
        <header className="bg-noir text-center">
            <section className="container pt-4 pb-3">
                <Link to="/home"><img src={logo} alt="Star wars logo" /></Link>
            </section>
        </header>
    );
}

export default Header;