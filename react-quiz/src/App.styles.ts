import styled,{createGlobalStyle} from "styled-components";
import BG from "./images/be-cool-pH_N6FRGvzc-unsplash.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BG});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    box-sizing: border-box;
    font-family: "Roboto Slab",sans-serif;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  >p{
    color:crimson;
  }
  .score{
   color: #000;
   font-size: 1.5rem;
   margin:0; 
  }
  h1{
    background-image: linear-gradient(180deg,#11af06,#004250);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0185a3);
    font-size: 60px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }
  .start,.next{
    cursor: pointer;
    background: linear-gradient(180deg,#9e9e9ea1,#607d8bb5);
    border: 2px solid #4e2d89;
    color:#4e2d89;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    border-radius: 8px;
    height: 40px;
    margin: 20px;
    padding: 0 40px;
  }
  .start{
    max-width: 200px;
  }
`
