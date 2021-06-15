import { mediaQueries } from "../utils/MediaQuerie";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

//BODY, HTML
  html, body{
    background-color: ${({ theme }) => theme.colors.background};
   font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
  }


//TYPO
h1{
 font-size: 4.5vw;
 font-weight: 300;
 color: ${({ theme }) => theme.colors.secondary};

 ${mediaQueries.lessThan("tablet")`
font-size: 10vw;
`}

}


.paragraph{
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};


}

.t-paragraph{
font-size: 3rem;
font-weight: 300;
line-height: 3.6rem;
color: ${({ theme }) => theme.colors.primary};
${mediaQueries.lessThan("tablet")`
font-size: 2.4rem;
line-height: 2.8rem;
`}
}



  `;
