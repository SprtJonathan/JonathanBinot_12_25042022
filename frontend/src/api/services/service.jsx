import userDataModel from "../models/userData";
import userActivityModel from "../models/userActivity";
import userAvgSessionsModel from "../models/userAvgSessions";
import userPerformanceModel from "../models/userPerformance";

const apiPort = "3000";
const apiURL = "http://localhost:" + apiPort + "/";

const fetchData = async (id, urlParam) => {
  const fullUrl = apiURL + "user/" + id + "/" + urlParam;
  const getRequest = await fetch(fullUrl);
  // convert data to json format
  const jsonResponse = await getRequest.json();

  if (jsonResponse === "can not get user") {
    return false;
  }

  // Utilisation d'un objet key value pour remplacer le switch
  /* A key value object. */
  const route = {
    "": new userDataModel(
      jsonResponse.data.id,
      jsonResponse.data.userInfos,
      jsonResponse.data.todayScore || jsonResponse.data.score,
      jsonResponse.data.keyData
    ),
    activity: new userActivityModel(
      jsonResponse.data.userId,
      jsonResponse.data.sessions
    ),
    "average-sessions": new userAvgSessionsModel(
      jsonResponse.data.userId,
      jsonResponse.data.sessions
    ),
    performance: new userPerformanceModel(
      jsonResponse.data.userId,
      jsonResponse.data.kind,
      jsonResponse.data.data
    ),
  };
  return route[urlParam];
};
export default fetchData;
