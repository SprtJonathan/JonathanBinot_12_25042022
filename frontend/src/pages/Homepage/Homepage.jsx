import Dashboard from "../Dashboard/Dashboard";
import Error from "../../components/Error/Error";

/**
 * Returns a React component that displays the dashboard content if the userID in the URL is valid. It displays an error if the id isn't valid
 * @returns A React component.
 */
function Homepage() {
  const URL = window.location.href;
  const userId = URL.split("/").pop();
  return <div>{userId ? <Dashboard id={userId} /> : <Error />}</div>;
}

export default Homepage;
