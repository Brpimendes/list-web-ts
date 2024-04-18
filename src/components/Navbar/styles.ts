import styled from "styled-components";

export const NavbarContainer = styled.nav`
  .hamburguer {
    display: none
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

  @media screen and (min-width: 320px) and (max-width: 430px) {
    .hamburguer {
      display: block;
      padding: 0.6em 1.2em;
      color: #fff;
      text-align: center;
    }

    ul {
      display: none;
    }

    .hamburguer {
     &:hover + ul {
        display: block;
        position: absolute;
        top: 5rem;
        left: 0;
        background-color: #fff;
        width: 100%;
     }
    }

    ul {
      &:hover {
        display: block;
      }

      li {
        margin: none;
        padding: 1rem;
      }
    }
  }

  @media screen and (min-width: 431px) and (max-width: 932px){
    ul{
      li {
        margin-right: 0.5rem;
  
        a {
          padding: 0.3rem 0.6rem
        }
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