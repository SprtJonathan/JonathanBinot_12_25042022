import PropTypes from "prop-types";

/**
 * Returns a React component that displays the greet message of the dashboard with the user name
 * @param {string} userData The user's name
 * @return A React component
 */

function userSummary(props) {
  const userData = props.userData;
  return (
    <section>
      <h1 className="greet-text">
        Bonjour <span className="username">{userData}</span>
      </h1>
      <p className="status">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </section>
  );
}
// Use of propTypes to detail every props used in the component
userSummary.propTypes = {
  userData: PropTypes.string.isRequired,
};

export default userSummary;
