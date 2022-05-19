import React, { Component } from "react";

import "./Dashboard.css"; // Profile page style

/* Importing the functions that call the API from the service.js file. */
import fetchData from "../../api/services/service";

import Error from "../../components/Error/Error";
import Content from "../../components/Content/Content";

class Dashboard extends Component {
  constructor() {
    super();
    // state
    this.state = {
      userFetchedData: {},
      userFetchedActivity: {},
      userFetchedAvgSessions: {},
      userFetchedPerformance: {},
      isLoaded: false,
    };
  }
  // Before component is mounted async method
  async componentDidMount() {
    // all Get request to receive data from endpoints backend
    const userInfosData = await fetchData(this.props.id, "");
    const userActivityData = await fetchData(this.props.id, "activity");
    const userAvgSessionsData = await fetchData(
      this.props.id,
      "average-sessions"
    );
    const userPerformanceData = await fetchData(this.props.id, "performance");
    // update state with received data
    this.setState({
      userFetchedData: userInfosData,
      userFetchedActivity: userActivityData,
      userFetchedAvgSessions: userAvgSessionsData,
      userFetchedPerformances: userPerformanceData,
      isLoaded: true,
    });
  }

  render() {
    const {
      userFetchedData,
      userFetchedActivity,
      userFetchedAvgSessions,
      userFetchedPerformances,
      isLoaded,
    } = this.state;

    return (
      // If State is updated show Container component otherwise show Loading component
      isLoaded ? (
        <Content
          userData={userFetchedData}
          userActivity={userFetchedActivity}
          userAvgSessions={userFetchedAvgSessions}
          userPerformances={userFetchedPerformances}
        />
      ) : (
        <Error />
      )
    );
  }
}

export default Dashboard;
