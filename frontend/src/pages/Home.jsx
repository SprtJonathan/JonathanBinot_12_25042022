import "../styles/Home.css"; // Profile page style

function Home() {
  let loggedUser = "Thomas"; // A récupérer depuis l'api via la route /user/:id
  return (
    <div>
      <h1 className="greet-text">
        Bonjour <span className="username">{loggedUser}</span>
      </h1>
      <p className="status">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Home;
