import {FormEvent, useState} from "react";
import {Eye, EyeSlash} from "@phosphor-icons/react";
import {LoginContainer, LoginForm} from "./styles";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const filter = {email, password};

    console.log(filter);
  }

  function handleCheckViewPassword() {
    setChecked(!checked);
    let pwd = document.getElementById("password");

    checked
      ? pwd?.setAttribute("type", "text")
      : pwd?.setAttribute("type", "password");
  }

  return (
    <LoginContainer>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name=""
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name=""
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {checked ? (
            <button type="button" onClick={handleCheckViewPassword}>
              {<Eye size={24} />}
            </button>
          ) : (
            <button type="button" onClick={handleCheckViewPassword}>
              {<EyeSlash size={24} />}
            </button>
          )}
        </label>
        <button type="submit">Enviar</button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
