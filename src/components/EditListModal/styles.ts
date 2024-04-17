import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
  }

  svg {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }

  label {
    font-size: 1.5rem;
    padding-top: 1.5rem;
  }

  input {
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
    border: none;
    border-radius: 0.25rem;
  }

  button {
    width: 100%;
    border: none;
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    margin-top: 1.5rem;
    font-size: 1.5rem;
    color: #fff;
    background-color: #1dac00;
    transition: filter 0.333s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-weigth: bold;
    text-align: center;
    color: #ff0000;
  }

  @media screen and (max-width: 430px) {
    h2 {
      font-size: 1.5rem;
    }

    svg {
      right: 10px;
      top: 10px;
    }

    label {
      font-size: 1.25rem;
    }

    input {
      font-size: 1rem;
      padding: 0.5rem 0.25rem;
    }

    button {
      font-size: 1.25rem;
    }
    
    p{
      font-size: 1.25rem;
    }
  }
`;
