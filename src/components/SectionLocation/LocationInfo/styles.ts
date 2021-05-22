import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 3px #969696;
  display: flex;
  flex-direction: column;
  left: 50%;
  padding: 35px;
  position: absolute;
  top: 0;
  transform: translate(-50%, -40%);
  width: 90%;
  z-index: 9999;

  ${media.greaterThan('medium')`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    transform: translate(-50%, -50%);
  `}

  ${media.greaterThan('large')`
    flex-direction: row;
    max-width: 1100px;
    width: 100%;
  `}
`
export const InfoItem = styled.div`
  margin-bottom: 20px;
  text-align: center;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  ${media.greaterThan('medium')`
    height: 85px;
    margin: 0 25px 0 0;
    padding-right: 25px;
    text-align: left;

    &:not(:last-child) {
      border-right: 1px solid #969696;
    }
  `}
`

export const InfoLabel = styled.span`
  color: #969696;
  display: block;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;

  ${media.greaterThan('medium')`
    font-size: 13px;
    margin-bottom: 20px;
  `}
`
export const InfoDescription = styled.p`
  color: #2b2b2b;
  font-size: 18px;
  font-weight: bold;

  ${media.greaterThan('medium')`
    font-size: 22px;
  `}
`
