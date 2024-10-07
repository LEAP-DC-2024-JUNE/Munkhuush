import "./App.css";
import AboutPage from "./Pages/AboutPage";
import Products from "./Pages/Products";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="btns">
        <span>Brand</span>
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/about">
          About
        </Link>
        <Link className="links" to="/products">
          Products
        </Link>
      </div>
      <div className="input-container">
        <input id="in1" type="Search" />
        <input id="in2" type="button" value="Search"></input>
      </div>
    </nav>
  );
}
export default Nav;
