import React from 'react'
import { Wrapper } from './styles'

type Props = {
  message: string
}

const FeedbackError = ({ message }: Props) => {
  return <Wrapper>{message}</Wrapper>
}

export default FeedbackError
