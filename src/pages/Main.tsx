import React from 'react'
import SectionSearch from 'components/SectionSearch'
import SectionLocation from 'components/SectionLocation'
import { Wrapper } from './styles'

const Main = () => {
  return (
    <Wrapper>
      <SectionSearch />
      <SectionLocation />
    </Wrapper>
  )
}

export default Main
