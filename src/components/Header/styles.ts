import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d70034;

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
