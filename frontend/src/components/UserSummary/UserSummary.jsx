import PropTypes from "prop-types";

/**
 * Card component props
 * @param {data} props.userData
 * @returns A React component
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

userSummary.propTypes = {
  userData: PropTypes.string.isRequired,
};

export default userSummary;
