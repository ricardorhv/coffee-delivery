import { StatusColumnContainer, StatusProps } from './styles'

export function StatusColumn({ status }: StatusProps) {
  return (
    <StatusColumnContainer status={status}>
      <strong>Status</strong>
      <span>{status}</span>
    </StatusColumnContainer>
  )
}
