import React from 'react'
import { Spinner } from './styles'

type Props = {
  imageUrl: string
  height: number
  width: number
}

const Loading = ({ imageUrl, height, width }: Props) => {
  return <Spinner src={imageUrl} height={height} width={width} />
}

export default Loading
