import { CreditCard, Bank, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { RadioInputContainer } from './styles'

interface RadioInputProps {
  inputID: string
  value: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
}

export function RadioInput({ inputID, value }: RadioInputProps) {
  const { register } = useFormContext()

  let PaymentWayIcon
  switch (value) {
    case 'Cartão de Crédito':
      PaymentWayIcon = <CreditCard size={16} />
      break
    case 'Cartão de Débito':
      PaymentWayIcon = <Bank size={16} />
      break
    case 'Dinheiro':
      PaymentWayIcon = <Money size={16} />
      break
  }

  return (
    <RadioInputContainer>
      <label htmlFor={inputID}>
        {PaymentWayIcon}
        <span>{value}</span>
      </label>
      <input
        type="radio"
        value={value}
        id={inputID}
        {...register('paymentWay')}
      />
    </RadioInputContainer>
  )
}
