/* Importing the css file and the images. */
import "./Aside.css";
import Yoga from "../../assets/img/yoga.svg";
import Swim from "../../assets/img/swim.svg";
import Bike from "../../assets/img/bike.svg";
import Muscle from "../../assets/img/muscle.svg";

/**
 * Returns React Component that displays the sidebar of the web page
 * @return  A React component
 */
function Sidebar() {
  const sportArray = [Yoga, Swim, Bike, Muscle];
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="filled-block"></div>
        <ul className="sport-section">
          {sportArray.map((array, keyValue) => (
            <a key={keyValue} href="/" className="sport-li">
              <img src={array} alt="" />
            </a>
          ))}
        </ul>
        <div className="upwards-text">Copiryght, SportSee 2020</div>
      </div>
    </div>
  );
}

export default Sidebar;
