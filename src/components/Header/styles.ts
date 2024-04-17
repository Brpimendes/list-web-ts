import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 8vh;
  display: flex;
  align-items: center;
  background-color: rgb(75, 75, 75, 0.73);

  .logo {
    margin-left: 1.2em;
  }

  @media screen and (max-width: 412px) {
    .logo svg {
      width: 48px;
      height: 48px;
    }
  }
`;
