import React, { useState, useEffect } from "react";

import "./Dashboard.css"; // Profile page style

/* Importing the functions that call the API from the service.js file. */
import fetchData from "../../api/services/service";

import Error from "../../components/Error/Error";
import Content from "../../components/Content/Content";

// class Dashboard extends Component {
//   constructor() {
//     super();
//     // state
//     this.state = {
//       userFetchedData: {},
//       userFetchedActivity: {},
//       userFetchedAvgSessions: {},
//       userFetchedPerformance: {},
//       isLoaded: false,
//     };
//   }
//   // Before component is mounted async method

//   async componentDidMount() {
//     // all Get request to receive data from endpoints backend
//     const userInfosData = await fetchData(this.props.id, "");
//     const userActivityData = await fetchData(this.props.id, "activity");
//     const userAvgSessionsData = await fetchData(
//       this.props.id,
//       "average-sessions"
//     );
//     const userPerformanceData = await fetchData(this.props.id, "performance");
//     // update state with received data
//     this.setState({
//       userFetchedData: userInfosData,
//       userFetchedActivity: userActivityData,
//       userFetchedAvgSessions: userAvgSessionsData,
//       userFetchedPerformances: userPerformanceData,
//       isLoaded: true,
//     });
//   }

//   render() {
//     const {
//       userFetchedData,
//       userFetchedActivity,
//       userFetchedAvgSessions,
//       userFetchedPerformances,
//       isLoaded,
//     } = this.state;

//     return (
//       // If State is updated show Container component otherwise show Loading component
//       isLoaded ? (
//         <Content
//           userData={userFetchedData}
//           userActivity={userFetchedActivity}
//           userAvgSessions={userFetchedAvgSessions}
//           userPerformances={userFetchedPerformances}
//         />
//       ) : (
//         <Error />
//       )
//     );
//   }
// }

function Dashboard(props) {
  const userId = props.id;

  const [userFetchedData, setUserFetchedData] = useState(null);
  const [userFetchedActivity, setUserFetchedActivity] = useState(null);
  const [userFetchedAvgSessions, setUserFetchedAvgSessions] = useState(null);
  const [userFetchedPerformance, setUserFetchedPerformance] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(fetchData(userId, ""));
  useEffect(() => {
    async function fetchApi() {
      setUserFetchedData(await fetchData(userId, ""));
      setUserFetchedActivity(await fetchData(userId, "activity"));
      setUserFetchedAvgSessions(await fetchData(userId, "average-sessions"));
      setUserFetchedPerformance(await fetchData(userId, "performance"));
      setIsLoaded(true);
    }
    fetchApi();
  }, [
    setUserFetchedData,
    setUserFetchedActivity,
    setUserFetchedAvgSessions,
    setUserFetchedPerformance,
    userId,
  ]);
  return (
    // If State is updated show Container component otherwise show Loading component
    isLoaded ? (
      <Content
        userData={userFetchedData}
        userActivity={userFetchedActivity}
        userAvgSessions={userFetchedAvgSessions}
        userPerformances={userFetchedPerformance}
      />
    ) : (
      <Error />
    )
  );
}

export default Dashboard;
