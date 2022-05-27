import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/* Importing the functions that call the API from the service.js file. */
import fetchData from "../../api/services/service";

import Error from "../../components/Error/Error";
import Content from "../../components/Content/Content";

import mock from "../../assets/mock"; // This JSON file mocks a user profile

/* The above code is a React component that is used to fetch data from an API. The data is then passed
to the Content component. */
/**
 * Returns a React component that displays an error message if the user ID is invalid
 * @param {string} id The user ID
 * @returns A React component.
 */
function Dashboard(props) {
  const userId = props.id;

  /* Setting the state of the component. */
  const [userFetchedData, setUserFetchedData] = useState(null);
  const [userFetchedActivity, setUserFetchedActivity] = useState(null);
  const [userFetchedAvgSessions, setUserFetchedAvgSessions] = useState(null);
  const [userFetchedPerformance, setUserFetchedPerformance] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  /* A boolean that is used to switch between the mocked data and the real data. */
  const useMockedData = false;

  /* A React hook that is used to fetch data from an API. The data is then passed to the Content
  component. */
  useEffect(() => {
    if (useMockedData) {
      setUserFetchedData(mock.USER_MAIN_DATA[0]); // The commented code is for the mocked data
      setUserFetchedActivity(mock.USER_ACTIVITY[0]);
      setUserFetchedAvgSessions(mock.USER_AVERAGE_SESSIONS[0]);
      setUserFetchedPerformance(mock.USER_PERFORMANCE[0]);
      setIsLoaded(true);
    } else {
      async function fetchApi() {
        setUserFetchedData(await fetchData(userId, ""));
        setUserFetchedActivity(await fetchData(userId, "activity"));
        setUserFetchedAvgSessions(await fetchData(userId, "average-sessions"));
        setUserFetchedPerformance(await fetchData(userId, "performance"));
        setIsLoaded(true);
      }
      fetchApi();
    }
  }, [
    setUserFetchedData,
    setUserFetchedActivity,
    setUserFetchedAvgSessions,
    setUserFetchedPerformance,
    userId,
    useMockedData,
  ]);
  return (
    // If the states are updated then isLoaded is true. Otherwise displays the error component
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

Dashboard.propTypes = {
  id: PropTypes.string,
};

export default Dashboard;
