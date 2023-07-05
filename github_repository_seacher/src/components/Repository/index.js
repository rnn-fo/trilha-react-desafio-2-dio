import React from 'react'
import { RepositoryContainer } from './styles'

export function Repository({repository}) {
  return (
    <RepositoryContainer key={repository.id}>
        <h3>Repository Name: {repository.full_name}</h3>
        <p><a href={repository.html_url}>{repository.html_url}</a></p>
    </RepositoryContainer>
  )
}
