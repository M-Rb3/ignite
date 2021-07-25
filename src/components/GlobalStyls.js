import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* overflow-x: hidden; */
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: 400;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
        min-height: 6.1rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input {
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
    }
    .pagination{
        margin: 0 ;
        margin-top: 2rem;
        /* width: 80%; */
        height: 40px;
        list-style: none;
        display: flex;
        justify-content: center;
        a{
        padding: 10px;
        margin: 8px;
        border-radius: 5px;
        border: 1px solid #ff7676;
        color: #ff7676;
        cursor: pointer;
        }
        a:hover{
        background-color: #ff7676;
        color: white;
        }
        .active-page a{
        background-color: #ff7676;
        color: white;
        }
    }

  

    
`;

export default GlobalStyle;
