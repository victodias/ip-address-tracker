import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import SearchField from './'

describe('<SearchField />', () => {
  const handleSubmit = jest.fn()

  it('should render the component correctly', () => {
    const component = render(<SearchField />)

    expect(component.container).toBeInTheDocument()
  })

  it("should render feedback error if format ip it's invalid", async () => {
    const component = render(<SearchField />)

    const input = component.getByRole('textbox')
    const submitButton = component.getByRole('button')
    const errorMessage =
      'Erro ao buscar este endereço de IP. Verifique se o dado informado está correto e tente novamente.'

    fireEvent.change(input, { target: { value: '123456789' } })
    fireEvent.click(submitButton)

    expect(await component.findByText(errorMessage)).toBeInTheDocument()
  })

  it('should load submit function correctly with ip valid format', () => {
    const component = render(<SearchField />)

    const input = component.getByRole('textbox')
    const submitButton = component.getByRole('button')
    const errorMessage =
      'Erro ao buscar este endereço de IP. Verifique se o dado informado está correto e tente novamente.'

    fireEvent.change(input, { target: { value: '200.162.227.235' } })
    fireEvent.click(submitButton)

    expect(component.getByTestId('spinner-loading')).toBeInTheDocument()
    expect(component.queryByText(errorMessage)).toBeNull()
  })
})
