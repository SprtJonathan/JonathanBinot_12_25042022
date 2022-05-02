import "./Card.css";

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
