import { useState } from "react"
import { Login } from "./components/Login/Login.js"
import { Home } from "./components/Home/Home.js"

import "./App.css";

function App() {

  const [theme, setTheme] = useState('AppLight')
  const [user, setUser] = useState(null)

  return <div className={theme}>
    {user ? <Home /> : <Login />}
  </div>;
}

export default App;
