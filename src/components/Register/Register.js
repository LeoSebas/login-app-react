import { useState } from "react";
import "./Register.css";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPass, setRepeatPass] = useState("");
  const [showRepeatPass, setShowRepeatPass] = useState(false);

  function handleName(event) {
    setName(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function toggleShowRepeatPass() {
    setShowRepeatPass(!showRepeatPass);
  }

  function handleRepeatPass(event) {
    setRepeatPass(event.target.value);
  }
  return (
    <div className="LoginForm">
      <p className="LoginFormDescr">
        Please fill in your information details below:
      </p>
      <div className="InputNameRow">
        <div className="InputNameContainer">
          <label htmlFor="__name_key__" name="name" className="Label">
            Name:
          </label>
          <input
            className="InputName"
            name="name"
            id="__name_key__"
            type="name"
            onChange={handleName}
            value={name}
          ></input>
        </div>
        <div className="InputNameContainer">
          <label htmlFor="__lastName_key__" name="last_name" className="Label">
            Last Name:
          </label>
          <input
            className="InputName"
            name="last_name"
            id="__lastName_key__"
            type="name"
            onChange={handleLastName}
            value={lastName}
          ></input>
        </div>
      </div>
      <div className="InputEmailContainer">
        <label htmlFor="__email_key__" className="Label">
          Email:
        </label>
        <input
          className="Input"
          name="email"
          id="__email_key"
          type="email"
          onChange={handleEmail}
          value={email}
        ></input>
      </div>
      <div className="InputPasswordContainer">
        <label htmlFor="__password_key__" className="Label">
          Password:
        </label>
        <div className="InputPasswordRow">
          <input
            className="InputPassword"
            name="password"
            id="__password_key__"
            type={showPassword ? "text" : "password"}
            onChange={handlePassword}
            value={password}
          ></input>
          <button className="ButtonShowPassword" onClick={toggleShowPassword}>
            <img
              width="30"
              height="30"
              alt="F"
              src={
                showPassword
                  ? "https://img.icons8.com/ios-filled/50/000000/visible--v1.png"
                  : "https://img.icons8.com/ios-filled/50/000000/hide.png"
              }
            />
          </button>
        </div>
      </div>
      <div className="InputPasswordContainer">
        <label htmlFor="__repeatPass_key__" className="Label">
          Password:
        </label>
        <div className="InputPasswordRow">
          <input
            className="InputPassword"
            name="repeatPass"
            id="__repeatPass_key__"
            type={showRepeatPass ? "text" : "password"}
            onChange={handleRepeatPass}
            value={repeatPass}
          ></input>
          <button
            className="ButtonShowRepeatPass"
            onClick={toggleShowRepeatPass}
          >
            <img
              width="30"
              height="30"
              alt="F"
              src={
                showRepeatPass
                  ? "https://img.icons8.com/ios-filled/50/000000/visible--v1.png"
                  : "https://img.icons8.com/ios-filled/50/000000/hide.png"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}
