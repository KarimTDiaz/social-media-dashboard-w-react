import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
    box-sizing: border-box;
}
body {
    margin: 0;
	font-family: 'Inter', sans-serif;
	background-color: ${({ dark }) => (dark ? '#1D1F29' : 'white')}; 
    transition: background-color 0.3s;
}

`;
export { GlobalStyle };
