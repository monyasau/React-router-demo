import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="">
        <div class="mw-80 navbar navbar-light container-fluid d-flex py-3 mb-0-4 border-bottom navbar-expand">
          <a
            href="/"
            class="navbar-brand d-flex align-items-center me-md-auto me-sm-auto"
          >
            React router demo
          </a>
          <ul class="nav-ul nav nav-pills no-wrap">
            <li class="nav-item">
              <Link to="/" class="nav-link home-link text-secondary">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link text-secondary">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about " class="nav-link text-secondary">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
