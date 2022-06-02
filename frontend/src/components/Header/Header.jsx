import "./Header.css";
import Logo from "../../assets/img/logo.png";

/**
 * Returns React Component that displays the header of the web page
 * @return  A React component
 */
function Header() {
  const pagesArray = ["Accueil", "Profil", "Réglage", "Communauté"];
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-name-logo">
          <img className="website-logo" src={Logo} alt="" />
          <span className="website-name">SportSee</span>
        </div>
        {pagesArray.map((array, keyValue) => (
          <a key={keyValue} href="/" className="navbar-li">
            {array}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
