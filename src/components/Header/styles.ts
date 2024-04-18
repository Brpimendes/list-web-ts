import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 8vh;
  display: flex;
  align-items: center;
  background-color: rgb(75, 75, 75, 0.73);

  .logo {
    margin-left: 1.2em;
  }

  @media screen and (min-width: 320px) and (max-width: 430px) {
    .logo svg {
      width: 48px;
      height: 48px;
    }
  }

  @media screen and (min-width: 431px) and (max-width: 932px) {
    height: 10vh;

    .logo svg {
      width: 36px;
      height: 36px;
    }
  }
`;
