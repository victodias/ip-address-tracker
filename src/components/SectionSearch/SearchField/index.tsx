import React, { useState } from 'react'
import { Wrapper, Input, Button, IconArrow, Spinner } from './styles'
import FeedbackError from 'components/FeedbackError'
import { getIpAddress } from 'api'
import { useLocation } from 'context/Location'

const InputSearch = () => {
  const { address, setAddress } = useLocation()
  const [ip, setIp] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const handleClick = () => {
    setIsLoading(true)
    getIpAddress(ip)
      .then((response) => {
        setIsLoading(false)

        setAddress({
          ...address,
          ip,
          location: response.data.location,
          isp: response.data.isp
        })
      })
      .catch(() => {
        setIsLoading(false)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 5000)
      })
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget
    value = value.replace(/[^0-9/.]/g, '')
    e.currentTarget.value = value
    setIp(value)
  }

  return (
    <Wrapper>
      <Input
        onChange={handleChange}
        maxLength={15}
        inputMode="numeric"
        placeholder="Pesquise por um endereço de IP ou domínio"
      />
      <Button onClick={handleClick}>
        {isLoading ? <Spinner src="/img/spinner.gif" /> : <IconArrow />}
      </Button>
      {error && (
        <FeedbackError message="Erro ao buscar este endereço de IP. Verifique se o dado informado está correto e tente novamente." />
      )}
    </Wrapper>
  )
}

export default InputSearch
