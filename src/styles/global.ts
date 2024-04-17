import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        background-color: rgb(20, 20, 20, 0.89);
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: #000;
    }

    h1 {
        color: #fff;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: #e1e1e6;
        padding: 1.5rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1rem;
        top: 1rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    @media screen and (max-width: 412px){
        .react-modal-content {
            width: 90%;
            max-width: 576px;
            background: #e1e1e6;
            padding: 1.5rem;
            position: relative;
            border-radius: 0.25rem;
        }

        .react-modal-close {
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
            border: 0;
            background: transparent;
    
            transition: filter 0.2s;
    
            &:hover {
                filter: brightness(0.8);
            }
        }
    }
`;
