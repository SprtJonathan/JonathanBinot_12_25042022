/* Importing the models. */
import userDataModel from "../models/userData";
import userActivityModel from "../models/userActivity";
import userAvgSessionsModel from "../models/userAvgSessions";
import userPerformanceModel from "../models/userPerformance";

/* Creating variables that represent the API URL, port as well as the complete API URL + port to make modifications easier.*/
const url = "http://localhost:";
const apiPort = "3000";
const apiURL = url + apiPort + "/";

/**
 * Returns the data fetched from the API or false if the API is unreachable
 * @param {string} id Id of the user we fetch the data from
 * @param {string} urlParam Endpoint of the API route used to fetch specific data
 * @return {object} Fetched data
 */
const fetchData = async (id, urlParam) => {
  // Variable that holds the entire API URI
  const fullUrl = apiURL + "user/" + id + "/" + urlParam;

  // We fetch the data from the API
  const getRequest = await fetch(fullUrl);

  // Data conversion to JSON
  const jsonResponse = await getRequest.json();

  // If an error is returned then the function returns false
  if (jsonResponse === "can not get user") {
    return false;
  }

  // Use of a key value object to tackle every possible API response
  // We create a new instance of the models to standardize the API response
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
  // We return the newly created object depending on the key value determined by the url parameter (api endpoint)
  return route[urlParam];
};
export default fetchData;
