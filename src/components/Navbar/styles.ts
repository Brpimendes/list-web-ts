import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em 2em;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-right: 1em;

      a {
        text-decoration: none;
        padding: 0.6em 0.8em;

        &:hover {
          color: #fff;
        }
      }

      .active {
        border-radius: 5px;
        background-color: #e96f6f;
        color: #fff;
      }
    }
  }
`;
