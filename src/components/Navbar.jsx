import { Link } from "react-router-dom";

function Navbar ({userMode, handleMode}){
    return (<>
        <nav className="navbar navbar-expand-md navbar-light bg-light mb-2">
            <div className="container-fluid">
                <Link className="navbar-brand ms-2" to='/'>Cozy Corner Café</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="#navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                    <ul className="navbar-nav">
                        <li className="nav-item me-3"><Link className="nav-link" to='/'><i className="bi bi-house-door"></i>首頁(MENU)</Link></li>
                        <li className="nav-item me-3"><Link className="nav-link" to='/OrderDetail'><i className="bi bi-cart4"></i>購物車</Link></li>
                        <li className="nav-item me-3"><Link className="nav-link" to='/Orders'><i className="bi bi-clock-history"></i>訂單紀錄</Link></li>
                        <li className="nav-item me-3">
                            <button className="btn btn-warning" onClick={handleMode}>
                                {userMode === 'User' ? '切換為管理員' : '切換為使用者'}
                                <small>({userMode}模式)</small>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar;