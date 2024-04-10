import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: rgb(45, 45, 45);

  margin: 0px auto;
  border-radius: 8px;

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;

    color: #fff;

    h3 {
      font-size: 1.5rem;
      text-align: center;
    }

    span {
      margin-left: 0.2rem;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }
  }
`;
