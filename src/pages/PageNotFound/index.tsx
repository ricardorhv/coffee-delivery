import { SmileySad } from 'phosphor-react'
import { PageNotFoundContainer } from './styles'

export function PageNotFound() {
  return (
    <PageNotFoundContainer>
      <SmileySad size={100} />
      <h1>Oops... Página não encontrada!</h1>
    </PageNotFoundContainer>
  )
}
