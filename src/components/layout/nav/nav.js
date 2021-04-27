import {Link} from "react-router-dom";

function Nav(){
    return (
        <nav className="navbar navbar-expand-lg bg-noir">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <p class="video-content-title">
                                <Link className="nav-link textLien" to="/home">Accueil</Link>
                                <span class="horizontal-bar"></span>
                            </p>
                        </li>
                        <li className="nav-item">
                            <p class="video-content-title">
                                <Link className="nav-link textLien" to="/search">Parcourir</Link>
                                <span class="horizontal-bar"></span>
                            </p>
                        </li>
                        <li className="nav-item">
                            <form class="form-floating mb-3">
                                <input type="text" class="form-control bg-lightGrey txt-brightGrey" id="search" placeholder="Yoda"/>
                                <label for="search" className="txt-brightGrey">Recherche</label>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Nav;