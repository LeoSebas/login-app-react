import { useState } from "react"
import { Login } from "./components/Login/Login.js"
import { Home } from "./components/Home/Home.js"

import "./App.css";

function App() {

  const [theme, setTheme] = useState('AppLight')
  const [user, setUser] = useState(null)

  function userChanged(user) {
    setUser(user);
    console.log("Cambiando usuario a: "+ {user})
  }

  function themeToggle(){
    setTheme(theme === "AppLight" ? "AppDark" : "AppLight")
    console.log("Cambiando tema a: " + {theme})
  }

  return <div className={theme}>
    {user ? <Home /> : <Login />}
  </div>;
}

export default App;
