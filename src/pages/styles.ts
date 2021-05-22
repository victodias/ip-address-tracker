import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 300px 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-rows: 280px 1fr;
  `}
`
