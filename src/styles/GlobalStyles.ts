import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    } 

    *, button, input {
        font-family: 'Roboto', sans-serif;
        border: 0;
        outline: 0;
    }
    :root {
        --primary: #36393f;
        --secondary: #2f3136;
        --tertiary: rgb(32,34,37);
        --quaternary: #292b2f;
        --quinary: #393d42;
        --senary: #828386;

        --white: #fff;
        --gray: #8a8c90;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;

        --notification: #f84a4b;
        --discord: #6e86d6;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;

        --link: #5d80d6;

        --rocketseat: #6633cc;
    } 
    /*:root {
        --primary: #c9c6c0;
        --secondary: #d0cec9;
        --tertiary: rgb(223, 221, 218);
        --quaternary: #d6d4d0;
        --quinary: #c6c2bd;
        --senary: #7d7c79;
    
        --white: #000;
        --gray: #75736f;
        --chat-input: rgb(191, 187, 180);
        --symbol: #8b8885;

        --notification: #07b5b4;
        --discord: #917929;
        --mention-detail: #657c6;
        --mention-message: #bec0c0;

        --link: #a27f29;

        --rocketseat: #99cc33;
    }*/
`;
