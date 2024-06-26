import styled from "styled-components";

export const LoginContainer = styled.main`
  height: 84vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1{
    text-align: center;
  }

  @media screen and (min-width: 320px) and (max-width: 430px) {
    form{
      width: 90%;
    }

    
    h1 {
      margin: 1rem 0;
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 431px) and (max-width: 932px) {
    height: 82vh;
    
    h1 {
      margin: 1rem 0;
      font-size: 1.5rem;
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

    span {
      display: block;
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
    }

    input {
      padding: 0.4rem;
      width: 100%;
      border: none;
      border-bottom: 1px solid #000;
      outline: none;
      font-size: 1.2rem;
    }
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
    background-color: rgb(159, 159, 159, 0.75);
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all .333s ease;

    &:hover {
      filter: opacity(0.6);
      background-color: rgb(52, 191, 17, 0.68);
    }
  }

  @media screen and (max-width: 932px) {
    height: 65%;
    width: 45%;
    
    label {
      margin-bottom: 0.5rem;

      span {
        font-size: 1.25rem;
      }

      input {
        font-size: 1rem;
      }
    }

    button {
      padding: 0.6rem;
    }
  }
`;