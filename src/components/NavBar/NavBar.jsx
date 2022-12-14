import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Mundo Mundial</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">Categorias</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">CONMEBOL</a></li>
                        <li><a className="dropdown-item" href="#">UEFA</a></li>
                        <li><a className="dropdown-item" href="#">CONCACAF</a></li>
                        <li><a className="dropdown-item" href="#">OFC</a></li>
                        <li><a className="dropdown-item" href="#">AFC</a></li>
                        <li><a className="dropdown-item" href="#">CAF</a></li>
                    </ul>
                </li>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                </form>
            </ul>
            <CartWidget />
        </div>
    </div>
</nav>
)
}

export default NavBar