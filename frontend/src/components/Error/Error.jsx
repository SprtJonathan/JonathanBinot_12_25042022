/**
 * Returns a React component that displays an error message if the user ID is invalid 
 * @returns A React component.
 */
function invalidUser() {
  return (
    <div>
      <div className="greet-text">
        <span className="username">Erreur : </span>
        <span>L'utilisateur demandé n'existe pas</span>
      </div>
    </div>
  );
}

export default invalidUser;
