import { useState } from "react";
import "./LoginForm.css";

export function LoginForm() {

    function handleType(event) {

    }

  return (
    <div className="LoginForm">
      <p className="LoginFormDescr">
        Please fill in your unique admin login details below
      </p>

      <div>
        <div className="InputContainer">
          <label htmlFor="__email_key__" className="LoginFormDescr">
            Email Address
          </label>
          <input name="email" id="__email_key__" className="Input"></input>
        </div>
        <div className="InputContainer">
          <label htmlFor="__password_key__" className="LoginFormDescr">
            Password
          </label>
          <input
            name="password"
            id="__password_key__"
            className="Input"
          ></input>
        </div>
        <div className="InputContainer">
          <label htmlFor="__type_key__" className="LoginFormDescr">
            Type
          </label>
          <select
            onChange={handleType}
            id="__type_key__"
            name="type"
            className="Input"
          >
            <option value="">Seleccionar...</option>
            <option value="Profesor">Profeeesor</option>
            <option value="Alumno">Alumno</option>
          </select>
        </div>
      </div>
    </div>
  );
}
