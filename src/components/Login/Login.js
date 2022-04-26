import { LoginForm } from "./LoginForm";
import { RegisterForm } from "../Register/Register";
import "./Login.css"
import { useState } from "react";
export function Login({userChanged}) {
  const [register, setRegister] = useState(false)

  function handleRegister() {
    setRegister(true)
  }

  return (
    <main className="LoginPage">
        <h2 className ="LoginTitle">Stax Food Admin Login</h2>
        {register 
          ? <RegisterForm />
          : <LoginForm userChanged={userChanged} handleRegister={ handleRegister } />}
    </main>
  );
}
