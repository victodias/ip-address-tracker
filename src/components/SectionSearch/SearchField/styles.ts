import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px;
  max-width: 550px;
  overflow: hidden;
  width: 100%;
`

export const Input = styled.input`
  background: #fff;
  border-radius: 15px 0 0 15px;
  border: none;
  font-size: 16px;
  padding: 20px;

  &:focus-visible {
    border: none;
    outline: none;
  }
`

export const Button = styled.button`
  align-items: center;
  background: #2b2b2b;
  border: none;
  border-radius: 0 15px 15px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
`

export const IconArrow = styled.span`
  content: url('/img/icon-arrow.svg');
`
export const Spinner = styled.img`
  height: 40px;
  width: 40px;
`

export const FeedbackError = styled.div`
  background: #ffdee8;
  border-radius: 8px;
  color: #ff175b;
  font-size: 12px;
  max-width: 320px;
  padding: 10px 15px;
  position: absolute;
  left: 100%;
  top: 10px;
  transform: translateX(-105%);
  width: 100%;
`
