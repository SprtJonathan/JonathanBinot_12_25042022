import "./Dashboard.css"; // Profile page style
import mock from "../../assets/mock"; // This JSON file mocks a user profile

import Card from "../../components/Card/Card";

import calIcon from "../../assets/img/units/calories.svg";
import protIcon from "../../assets/img/units/proteins.svg";
import glucIcon from "../../assets/img/units/glucids.svg";
import lipIcon from "../../assets/img/units/lipids.svg";

import TestChart from "../../components/Charts/TestChart";

function Dashboard() {
  console.log(mock.USER_INFOS);
  let mockedUser = mock.USER_INFOS; // This has to be taken from the api via the /user/:id route
  //Daily Activity Chart
  return (
    <div>
      <section>
        <h1 className="greet-text">
          Bonjour{" "}
          <span className="username">{mockedUser.userInfos.firstName}</span>
        </h1>
        <p className="status">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      </section>
      <section className="stats">
        <div className="charts-section">
          <div className="big-chart">
            <TestChart width="835" height="420"/>
          </div>
          <div className="small-charts">
            <div className="small-chart-block">Average session time</div>
            <div className="small-chart-block">Radar Chart 2</div>
            <div className="small-chart-block">Goal score</div>
          </div>
        </div>
        <div className="cards-section">
          <Card
            icon={calIcon}
            color="255, 0, 0"
            data={mockedUser.keyData.calorieCount}
            unit="Cal"
            type="Calories"
          />
          <Card
            icon={protIcon}
            color="74, 184, 255"
            data={mockedUser.keyData.proteinCount}
            unit="g"
            type="Proteines"
          />
          <Card
            icon={glucIcon}
            color="249, 206, 35"
            data={mockedUser.keyData.carbohydrateCount}
            unit="g"
            type="Glucides"
          />
          <Card
            icon={lipIcon}
            color="253, 81, 129"
            data={mockedUser.keyData.lipidCount}
            unit="g"
            type="Lipides"
          />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
