import "./Home.css";
import missionPassed from "../../assets/img/mission-passed.png";

export function Home({ userChanged }) {

  const user = JSON.parse(window.localStorage.getItem('user'))  ;

  function handleSignOut() {
    userChanged();
  }

  return (
    <main className="HomePage">
      <div className="BackgroundContainer">
      <div className="HomeWelcomeContainer">  
        <div className="UserInformationContainer">
          <h3 id="UITitle">Welcome!</h3>
          <h5>Email: {user.email}</h5>
          <h5>Type: {user.type}</h5>
        </div>
        <div className="ImgContainer">
          <img className="ImgSuccess" alt="Success!" src={missionPassed}></img>
        </div>
        <button className="ButtonSignOut" onClick={handleSignOut}>
          <p className="SignOutText">Sign Out</p>
        </button>
      </div>
      </div>
    </main>
  );
}
