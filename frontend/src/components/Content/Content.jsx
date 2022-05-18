import UserSummary from "../../components/UserSummary/UserSummary"; // Displays a bar chart with data values passed as props

import BarChart from "../../components/Charts/BarChart"; // Displays a bar chart with data values passed as props
import LineChart from "../../components/Charts/LineChart"; // Displays a line chart with data values passed as props
import RadarChart from "../../components/Charts/RadarChart"; // Displays a radar chart with data values passed as props
import PieChart from "../../components/Charts/PieChart"; // Displays circle progress bar with the percentage value passed as prop
import Card from "../../components/Card/Card"; // The Card component used to create the cards showing user stats

import mock from "../../assets/mock"; // This JSON file mocks a user profile

import calIcon from "../../assets/img/units/calories.svg"; // Calories Icon
import protIcon from "../../assets/img/units/proteins.svg"; // Proteine Icon
import glucIcon from "../../assets/img/units/glucids.svg"; // Glucids Icon
import lipIcon from "../../assets/img/units/lipids.svg"; // Lipids Icon

function displayContent(props) {
  let userData = props.userData;
  let userActivity = props.userActivity;
  let userAvgSessions = props.userAvgSessions;
  let userPerformances = props.userPerformances;

  console.log(props)

  return (
    <div>
      <UserSummary userData={userData.userInfos.firstName} />
      <section className="stats">
        <div className="charts-section">
          <div className="big-chart">
            <span className="sessions-title">Activité quotdienne</span>
            <BarChart data={userActivity.sessions} />
          </div>
          <div className="small-charts">
            <div className="line-chart-block small-chart-block">
              <p className="line-chart-title">Durée moyenne des sessions</p>
              <LineChart data={userAvgSessions.sessions} />
            </div>
            <div className="radar-chart-block small-chart-block">
              <RadarChart performances={userPerformances} />
            </div>
            <div className="radial-chart-block small-chart-block">
              <span className="radial-chart-title">Score</span>
              <PieChart score={userData.todayScore} />
            </div>
          </div>
        </div>
        <div className="cards-section">
          <Card
            icon={calIcon}
            color="255, 0, 0"
            data={userData.keyData.calorieCount}
            unit="Cal"
            type="Calories"
          />
          <Card
            icon={protIcon}
            color="74, 184, 255"
            data={userData.keyData.proteinCount}
            unit="g"
            type="Proteines"
          />
          <Card
            icon={glucIcon}
            color="249, 206, 35"
            data={userData.keyData.carbohydrateCount}
            unit="g"
            type="Glucides"
          />
          <Card
            icon={lipIcon}
            color="253, 81, 129"
            data={userData.keyData.lipidCount}
            unit="g"
            type="Lipides"
          />
        </div>
      </section>
    </div>
  );
}

export default displayContent;
