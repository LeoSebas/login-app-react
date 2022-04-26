import { useEffect, useState } from "react";
import "./LoginForm.css";

export function LoginForm({ userChanged, handleRegister }) {
  /// Para el inicio de sesión se deben utilizar:
  /// Email:      test@staxfood.com
  /// Password:   staxfood

  const emailOk = "test@staxfood.com";
  const passOk = "staxfood";

  //State para el email
  const [email, setEmail] = useState("");

  //State para la contraseña y para mostrar/ocultar
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //State para el tipo de usuario y comprobar su selección
  const [type, setType] = useState("");
  const [typeSelected, setTypeSelected] = useState("pure");

  //State flag para mostrar/ocultar error en credenciales
  const [showError, serShowError] = useState(false);

  function handleType(event) {
    setType(event.target.value);
    event.target.value === ""? setTypeSelected("not_selected") : setTypeSelected("selected");
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

  //Toggle flag para mostrar/ocultar la contraseña
  function ToggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleError() {
    serShowError(true);
  }

  function handleTypeNotSelected() {
    setTypeSelected("not_selected");
  }

  function handleSignIn() {
    // Primero verifica que se haya seleccionado un type
    (typeSelected === "pure" || typeSelected === "not_selected")
      ? handleTypeNotSelected()
      : //Luego comprueba las credenciales
      (email === emailOk && password === passOk
      ? userChanged({ email: email, type: type })
      : handleError());
  }

  return (
    <div className="LoginForm">
      <p className="LoginFormDescr">
        Please fill in your unique admin login details below
      </p>
      <div className={showError ? "ErrorContainer" : "ErrorContainerOff"}>
        <p className="ErrorText">Credenciales incorrectas</p>
      </div>
      <div
        className={
          typeSelected === "not_selected"
            ? "ErrorContainer"
            : "ErrorContainerOff"
        }
      >
        <p className="ErrorText">Debe seleccionar un tipo</p>
      </div>
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
          <option value="">Seleccionar...</option>
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
        <a href="#top" className="Label" onClick={handleRegister}>
          Register!
        </a>
      </div>
      <button type="submit" className="ButtonSubmit" onClick={handleSignIn}>
        <p className="SubmitText">Sign In</p>
      </button>
    </div>
  );
}
