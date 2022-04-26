import { useState } from "react"
import { Login } from "./components/Login/Login.js"
import { Home } from "./components/Home/Home.js"

import "./App.css";

function App() {

  const [theme, setTheme] = useState('AppLight')
  // Valor inicial de User en el localStorage
  const initialUser = window.localStorage.getItem('user')

  const [user, setUser] = useState(initialUser)

  function userChanged(user) {
    setUser(user);
    user 
    ? window.localStorage.setItem('user',JSON.stringify(user))
    : window.localStorage.removeItem('user')
    console.log("Cambiando usuario a: "+ {user})
  }

  function themeToggle(){
    setTheme(theme === "AppLight" ? "AppDark" : "AppLight")
    console.log("Cambiando tema a: " + {theme})
  }

  return <div className={theme}>
    {user ? <Home userChanged={userChanged} /> : <Login userChanged={userChanged} />}
  </div>;
}

export default App;
