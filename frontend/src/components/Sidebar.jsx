import "../styles/Sidebar.css";
import Logo from "../assets/img/logo.png";
import Yoga from "../assets/img/yoga.svg";
import Swim from "../assets/img/swim.svg";
import Bike from "../assets/img/bike.svg";
import Muscle from "../assets/img/muscle.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <img className="website-logo" src={Logo} alt="" />
        <div className="sport-section">
          <div className="sport-div">
            <img src={Yoga} alt="" className="sport-icon" />
          </div>
          <div className="sport-div">
            <img src={Swim} alt="" className="sport-icon" />
          </div>
          <div className="sport-div">
            <img src={Bike} alt="" className="sport-icon" />
          </div>
          <div className="sport-div">
            <img src={Muscle} alt="" className="sport-icon" />
          </div>
        </div>
        <div className="upwards-text">Copiryght, SportSee 2020</div>
      </div>
    </div>
  );
}

export default Sidebar;
