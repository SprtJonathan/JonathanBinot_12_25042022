import PropTypes from "prop-types";
import "./Card.css";

/**
 * Card component props
 * @param {string} props.icon
 * @param {string} props.color
 * @param {number} props.data
 * @param {string} props.unit
 * @param {string} props.type
 * @returns A React component
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

/* A way to check the props that are passed to the component. */
Card.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Card;
