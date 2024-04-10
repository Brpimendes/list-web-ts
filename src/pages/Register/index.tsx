import {FormEvent, useState} from "react";
import {Eye, EyeSlash} from "@phosphor-icons/react";
import {RegisterContainer, RegisterForm} from "./styles";
import {NavLink} from "react-router-dom";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const filter = {name, email, password};

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
    <RegisterContainer>
      <h1>Criar conta</h1>
      <RegisterForm onSubmit={handleSubmit}>
        <label>
          <span>Nome Completo:</span>
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
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
        <span>
          Já possui cadastro? Faça o login, clicando{" "}
          <NavLink to={"/login"}>aqui</NavLink>
        </span>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
