import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

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
  ${media.lessThan('medium')`
    .leaflet-control-container .leaflet-top {
      top: 100%;
      transform: translateY(calc(-100% - 20px))
    }
  `}
`
