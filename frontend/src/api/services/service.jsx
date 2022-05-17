import userDataModel from "../models/userData";
import userActivityModel from "../models/userActivity";
import userAvgSessionsModel from "../models/userAvgSessions";
import userPerformanceModel from "../models/userPerformance";

const apiPort = "3000";
const apiURL = "http://localhost:" + apiPort + "/";

const fetchData = async (id, urlParam) => {
  const fullUrl = apiURL + "user/" + id + urlParam;
  const getRequest = await fetch(fullUrl);
  // convert data to json format
  const jsonResponse = await getRequest.json();

  if (jsonResponse === "can not get user") window.location.replace("/");
  // if(jsonResponse === "can not get user") <Redirect to={NotFound}/>

  //
  switch (urlParam) {
    case "/":
      /* Creating a new instance of the userDataModel class. */
      return new userDataModel(
        jsonResponse.data.id,
        jsonResponse.data.userInfos,
        jsonResponse.data.todayScore || jsonResponse.data.score,
        jsonResponse.data.keyData
      );
    case "/activity":
      /* Creating a new instance of the userActivityModel class. */
      return new userActivityModel(
        jsonResponse.data.userId,
        jsonResponse.data.sessions
      );
    case "/average-sessions":
      /* Creating a new instance of the userAvgSessionsModel class. */
      return new userAvgSessionsModel(
        jsonResponse.data.userId,
        jsonResponse.data.sessions
      );
    case "/performance":
      /* Creating a new instance of the userPerformanceModel class. */
      return new userPerformanceModel(
        jsonResponse.data.userId,
        jsonResponse.data.kind,
        jsonResponse.data.data
      );
    default:
      // No endpoint for this get request
      console.log("No data loaded !");
      break;
  }
};
export default fetchData;
