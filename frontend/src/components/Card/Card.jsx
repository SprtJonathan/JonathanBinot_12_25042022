/* Importing the CSS file for the Card component. */
import "./Card.css";

/**
 * It takes in an object with the properties icon, color, data, unit, and type, and returns a div with
 * a div inside of it, which has a div inside of it, which has an image inside of it, which has a div
 * inside of it, which has a div inside of it, which has a div inside of it.
 * @returns A React component.
 */
function Card({ icon, color, data, unit, type }) {
  return (
    <div className="card">
      <div
        className="card-icon-block"
        style={{
          backgroundColor: `rgba(${color}, 0.1)`,
        }}
      >
        <img className="card-icon" src={icon} alt={type} />
      </div>
      <div className="card-text">
        <div className="card-data">
          {data}
          {unit}
        </div>
        <div className="card-type">{type}</div>
      </div>
    </div>
  );
}
export default Card;
