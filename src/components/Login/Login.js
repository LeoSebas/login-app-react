import { LoginForm } from "./LoginForm";
import "./Login.css"
export function Login({userChanged}) {
  return (
    <main className="LoginPage">
        <h2 className ="LoginTitle">Stax Food Admin Login</h2>
        <LoginForm userChanged={userChanged} />
    </main>
  );
}
