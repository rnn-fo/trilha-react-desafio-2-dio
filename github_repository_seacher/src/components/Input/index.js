import React from 'react'
import { InputContainer } from './styles'

export function Input({value,onChange}) {
  return (
    <InputContainer>
        <input placeholder="Repositório" value={value} onChange={onChange}></input>
    </InputContainer>
  )
}
