import { useEffect, useState } from "react";
import "./LoginForm.css";

export function LoginForm() {
  //State para el email
  const [email, setEmail] = useState("");

  //State para la contraseña y para mostrar/ocultar
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("");

  function handleType(event) {
    setType(event.target.value);
  }
  useEffect(() => console.log("Tipo cambiado: " + type), [type]);

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  useEffect(() => console.log("Email cambiado: " + email), [email]);

  function handlePassword(event) {
    setPassword(event.target.value);
  }
  useEffect(() => console.log("Password cambiada: " + password), [password]);

  function ToggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSignIn() {}

  return (
    <div className="LoginForm">
      <p className="LoginFormDescr">
        Please fill in your unique admin login details below
      </p>
      <div className="InputTypeContainer">
        <label htmlFor="__type_key__" className="Label">
          Type:
        </label>
        <select
          onChange={handleType}
          placeholder="Seleccionar..."
          id="__type_key__"
          name="type"
          className="InputType"
          value={type}
        >
          <option value="Profesor">Profesor</option>
          <option value="Alumno">Alumno</option>
        </select>
      </div>
      <div className="InputContainer">
        <label htmlFor="__email_key__" className="Label">
          Email Address
        </label>
        <input
          name="email"
          id="__email_key__"
          type="email"
          className="Input"
          value={email}
          onChange={handleEmail}
        ></input>
      </div>
      <div className="InputContainer">
        <label htmlFor="__password_key__" className="Label">
          Password
        </label>
        <div className="InputPasswordContainer">
          <input
            name="password"
            className="Input"
            id="__password_key__"
            type={
              // Toggle para mostrar/ocultar la contraseña
              showPassword ? "text" : "password"
            }
            value={password}
            onChange={handlePassword}
          ></input>
          <button className="ButtonShowPassword" onClick={ToggleShowPassword}>
            <img
              width="30"
              height="30"
              alt="F"
              src={
                showPassword
                  ? "https://img.icons8.com/ios-filled/50/000000/visible--v1.png"
                  : "https://img.icons8.com/ios-filled/50/000000/hide.png"
              }
            ></img>
          </button>
        </div>
      </div>
      <div className="ForgotAnRegisterContainer">
        <a href="#top" className="Label">
          Forgot password?
        </a>
        <a href="#top" className="Label">
          Register!
        </a>
      </div>
      <button type="submit" className="ButtonSubmit" onClick={handleSignIn}>
        <p className="SubmitText">Sign In</p>
      </button>
    </div>
  );
}
