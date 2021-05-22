import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    margin: 0;
    padding: 0;
  }
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`
