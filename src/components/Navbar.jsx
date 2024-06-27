import { Link } from "react-router-dom";

function Navbar (){
    return (<>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand ms-2" to='/'>線上點餐系統</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="#navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                    <ul className="navbar-nav">
                        <li className="nav-item me-3"><Link className="nav-link" to='/'>首頁</Link></li>
                        <li className="nav-item me-3"><Link className="nav-link" to='/About'>關於我們</Link></li>
                        <li className="nav-item me-3"><Link className="nav-link" to='/Contact'>聯絡我們</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar;