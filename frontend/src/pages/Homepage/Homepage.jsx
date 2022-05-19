import Dashboard from "../Dashboard/Dashboard";
import Error from "../../components/Error/Error";

function Homepage() {
  const URL = window.location.href;
  const userId = URL.split("/").pop();
  console.log(userId);
  return <div>{userId ? <Dashboard id={userId} /> : <Error />}</div>;
}

export default Homepage;
