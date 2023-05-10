import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 21rem;
    height: 8rem;
    padding: 1rem;
    margin: -4rem auto;

    background-color: #f16b6b;
    border: none;
    border-radius: 5px;
    color: #fff;

    h3 {
      font-size: 2rem;
      text-align: center;
    }

    span {
      margin-top: 0.5rem;
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
    }
  }
`;
