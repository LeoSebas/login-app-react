import "./Home.css";
import missionPassed from "../../assets/img/mission-passed.png";

export function Home({ userChanged }) {
  function handleSignOut() {
    userChanged();
  }

  return (
    <main className="HomePage">
      <div className="HomeWelcomeContainer">
        <div className="ImgContainer">
          <img className="ImgSuccess" src={missionPassed}></img>
        </div>
        <button className="ButtonSignOut" onClick={handleSignOut}>Sign Out</button>
      </div>
    </main>
  );
}
