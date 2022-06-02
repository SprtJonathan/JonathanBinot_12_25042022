import Dashboard from "../Dashboard/Dashboard";
import Error from "../../components/Error/Error"; // Importing the Error component for it to displays if userId is invalid

/**
 * Returns a React component that displays the dashboard content if the userID in the URL is valid. It displays an error if the id isn't valid
 * @returns A React component.
 */
function Homepage() {
  const URL = window.location.href;
  const userId = URL.split("/").pop();
  return userId ? <Dashboard id={userId} /> : <Error />;
}

export default Homepage;
