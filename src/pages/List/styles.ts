import styled from "styled-components";

export const ListContainer = styled.main`
  height: 80vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    margin-top: 1.5rem;
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const ListTable = styled.div`
  flex: 1;
  margin-top: 1rem;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: rgb(79, 79, 73, 0.88);
      padding: 1rem 0;
      text-align: left;
      color: #fff;
      font-size: 1.5rem;
      line-height: 1.2;

      &:first-child {
        border-top-left-radius: 8px;
        padding: 1rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding: 1rem;
      }
    }

    td {
      background-color: #e1e1e6;
      border-top: 4px solid rgb(45, 45, 45, 1);
      font-size: 1.2rem;
      line-height: 1.2;

      &:first-child {
        width: 50%;
        padding: 0 1rem;
      }

      &:last-child {
        padding: 0.5rem;
      }

      button {
        background-color: transparent;
        border: 0;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        transition: all 0.333s ease;

        &:hover {
          background-color: #d70034;
          color: #fff;
        }
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;

  button {
    background-color: rgb(159, 159, 159, 0.75);
    padding: 0.1rem 0.3rem;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.2rem;
    transition: all 0.333s ease;

    &:hover {
      background-color: rgb(52, 191, 17, 0.68);
    }

    svg{
      transform: translateY(2px);
    }
  }
`;
