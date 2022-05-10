import "./Dashboard.css"; // Profile page style
import mock from "../../assets/mock"; // This JSON file mocks a user profile

import Card from "../../components/Card/Card"; // The Card component used to create the cards showing user stats

import calIcon from "../../assets/img/units/calories.svg"; // Calories Icon
import protIcon from "../../assets/img/units/proteins.svg"; // Proteine Icon
import glucIcon from "../../assets/img/units/glucids.svg"; // Glucids Icon
import lipIcon from "../../assets/img/units/lipids.svg"; // Lipids Icon

import BarChart from "../../components/Charts/BarChart"; // Displays a bar chart with data values passed as props
import LineChart from "../../components/Charts/LineChart"; // Displays a line chart with data values passed as props
import RadarChart from "../../components/Charts/RadarChart"; // Displays a radar chart with data values passed as props
import PieChart from "../../components/Charts/PieChart"; // Displays circle progress bar with the percentage value passed as prop

function Dashboard() {
  // Main user page
  let userData = mock.USER_MAIN_DATA[0];
  let userActivity = mock.USER_ACTIVITY[0];
  let userAvgSessions = mock.USER_AVERAGE_SESSIONS[0];
  let userPerformances = mock.USER_PERFORMANCE[0]; // This has to be taken from the api via the /user/:id route
  //Daily Activity Chart
  return (
    <div>
      <section>
        <h1 className="greet-text">
          Bonjour{" "}
          <span className="username">{userData.userInfos.firstName}</span>
        </h1>
        <p className="status">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      </section>
      <section className="stats">
        <div className="charts-section">
          <div className="big-chart">
            <BarChart data={userActivity.sessions} />
          </div>
          <div className="small-charts">
            <div className="line-chart-block small-chart-block">
              <LineChart data={userAvgSessions.sessions} />
            </div>
            <div className="radar-chart-block small-chart-block">
              <RadarChart performances={userPerformances} />
            </div>
            <div className="radial-chart-block small-chart-block">
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

export default Dashboard;
