import {Link} from "react-router-dom";

function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/shoppinglist">Ma liste</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/profil">Mon profil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/cgv">CGV</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Nav;