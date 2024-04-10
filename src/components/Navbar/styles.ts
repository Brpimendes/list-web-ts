import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em 2em;

  ul {
    display: flex;
    list-style: none;
    font-size: 1.2rem;

    li {
      margin-right: 1em;

      a {
        padding: 0.6em 0.8em;

        &:hover {
          color: #fff;
        }
      }

      .active {
        border-radius: 5px;
        background-color: rgb(0, 0, 0);
        color: #fff;
      }
    }
  }
`;
