import styled from "styled-components";

export const ListContainer = styled.main`
  height: 84vh;
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

  @media screen and (min-width: 320px) and (max-width: 430px) {
    width: 90%;

    h1 {
      margin: 1rem 0;
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 431px) and (max-width: 932px) {
    height: 82vh;
    width: 90%;

    h1 {
      margin: 1rem 0;
      font-size: 1.5rem;
    }
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
      padding: 1rem;
      text-align: left;
      color: #fff;
      font-size: 1.5rem;
      line-height: 1.2;

      &:first-child {
        border-top-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
      }
    }

    td {
      background-color: #e1e1e6;
      border-top: 4px solid rgb(45, 45, 45, 1);
      font-size: 1.2rem;
      line-height: 1.2;
      padding: 0 1rem;

      &:first-child {
        width: 50%;
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

  @media screen and (min-width: 320px) and (max-width: 430px) {
    table {
      th {
        padding: 0px 1rem;
      }
      
      td {
        padding: 0px 1rem;
      }
    }
  }

  @media screen and (min-width: 431px) and (max-width: 932px) {
    table {
      th {
        font-size: 1.25rem;
        padding: 0.25rem 0.5rem;
      }
      
      td {
        font-size: 1rem;
        padding: 0.25rem 0.5rem;

        &:first-child {
          width: 45%;
        }
  
        &:last-child {
          padding: 0.25rem 0.5rem;
        }
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    gap: 2px;
    background-color: rgb(159, 159, 159, 0.75);
    padding: 0.1rem 0.3rem;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.25rem;
    transition: all 0.333s ease;

    &:hover {
      background-color: rgb(52, 191, 17, 0.68);
    }

    svg{
      transform: translateY(-1px);
    }
  }

  @media screen and (min-width: 320px) and (max-width: 430px){
    gap: 0.5rem;
    
    button{
      font-size: 1rem;
      padding: 0.4rem 0.6rem;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media screen and (min-width: 431px) and (max-width: 932px){
    gap: 0.5rem;

    button{
      font-size: 1rem;
      padding: 0.2rem 0.5rem;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
