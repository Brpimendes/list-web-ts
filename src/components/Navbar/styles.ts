import styled from "styled-components";

export const NavbarContainer = styled.nav`
  .hamburguer {
    display: none;
  }

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

  @media screen and (max-width: 412px){
    .hamburguer {
      display: block;
      padding: 0.6em 1.2em;
      color: #fff;
    }

    ul {
      display: none;


      li {

      }
    }
  }
`;

/*
  ul{
    display: block;
    position: absolute;
    top: 93px;
    right: 1.2em;
    background-color: #fff;
    width: 300px;

    li{
      padding: 1em;
    }
  }
*/