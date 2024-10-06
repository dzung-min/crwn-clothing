import { Link, NavLink } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const NavBar = () => {
  return (
    <nav className="navigation">
      <Link className="logo-container" to="/">
        <CrwnLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <NavLink className="nav-link" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="nav-link" to="/sign-in">
          SIGN IN
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
