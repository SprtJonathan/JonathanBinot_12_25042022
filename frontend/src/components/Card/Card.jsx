import PropTypes from "prop-types";
import "./Card.css";

/**
 * Returns a react component that displays a card with data
 * @param {string} icon The icon of the card
 * @param {string} color The color of the card icon block
 * @param {number} data The data contained in the card
 * @param {string} unit The abbreviation of the unit
 * @param {string} type The name of the unit
 * @returns A card React component
 */
function Card(props) {
  const icon = props.icon;
  const color = props.color;
  const data = props.data;
  const unit = props.unit;
  const type = props.type;

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

// Use of propTypes to detail every props used in the component
Card.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Card;
