import {LoginContainer, LoginForm} from "./styles";

const Login = () => {
  return (
    <LoginContainer>
      <h1>Login</h1>
      <LoginForm>
        <label>
          <span>Email:</span>
          <input type="email" name="" id="" />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="" id="" />
        </label>
        <button type="submit">Enviar</button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
