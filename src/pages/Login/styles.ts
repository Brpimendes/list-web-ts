import styled from "styled-components";

export const LoginContainer = styled.main`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1{
    text-align: center;
  }

  @media screen and (max-width: 412px) {
    form{
      width: 90%;
    }
  }
`;

export const LoginForm = styled.form`
  height: 50%;
  width: 30%;
  margin: 0.8rem;
  padding: 1.5rem;

  label {
    display: block;
    margin-bottom: 1rem;
    position: relative;
  }

  label span {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
  }

  label input {
    padding: 0.4rem;
    width: 100%;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    font-size: 1.2rem;
  }

  button[type="button"] {
    position: absolute;
    width: 0;
    padding: 0;
    background-color: transparent;
    color: #000;
    right: 35px;
    bottom: 1px;
  }

  button {
    width: 100%;
    padding: 0.8rem;
    border: none;
    background-color: #f70d46;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all .333s ease;
  }

  button:hover {
    filter: opacity(0.6);
  }
`;