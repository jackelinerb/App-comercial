import { createGlobalStyle } from "styled-components";
import { shade } from "polished";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}
body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
}

body,input,button{
    font: 16px Roboto, sans-serif;

}
#root {
    max-width:960px;
    margin: 0 auto;
    padding: 40px 20px;
}
button {
    cursor:pointer;
    background-color: #42ec9a;
    padding:16px 32px;
    border-radius:32px;
    border:0;
    transition: background-color 0.2s;
    margin: 20px;

    &:hover{
        background: ${shade(0.2, "#42ec9a")}
    }
}
`;
