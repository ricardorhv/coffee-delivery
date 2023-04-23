import { HeaderColumnContainer } from './styles'

interface HeaderColumnProps {
  title: string
  content: string
}

export function HeaderColumn({ title, content }: HeaderColumnProps) {
  return (
    <HeaderColumnContainer title={title}>
      <strong>{title}</strong>
      <span>{content}</span>
    </HeaderColumnContainer>
  )
}
