import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(75, 75, 75, 0.73);

  .logo {
    margin-left: 1.2em;

    img {
      width: 80px;
      height: 80px;
      background-color: transparent;
      color: #ddd;
      filter: invert(1);
    }
  }
`;
