import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-name-logo">
          <span className="website-name">SportSee</span>
        </div>
        <li className="navbar-li">Accueil</li>
        <li className="navbar-li">Profil</li>
        <li className="navbar-li">Réglage</li>
        <li className="navbar-li">Communauté</li>
      </div>
    </div>
  );
}

export default Header;
