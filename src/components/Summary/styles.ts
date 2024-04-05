import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f16b6b;

  margin: 0px auto;
  border-radius: 8px;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0.2rem;

    color: #fff;

    &:first-child {
      border-right: 1px solid #fff;
    }

    h3 {
      font-size: 1.5rem;
      text-align: center;
    }

    span {
      margin-top: 0.5rem;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }
  }
`;
