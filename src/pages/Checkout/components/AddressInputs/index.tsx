import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'
import {
  AddressContainer,
  ComplementInputWrapper,
  GridContainer,
  InputWrapper,
} from './styles'

export function AddressInputs() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()
  const complement = watch('complement') || ''

  return (
    <AddressContainer>
      <InputWrapper>
        <input type="text" placeholder="CEP" {...register('CEP')} />
        <ErrorMessage
          errors={errors}
          name="CEP"
          render={({ message }) => <span>{message}</span>}
        />
      </InputWrapper>
      <InputWrapper>
        <input type="text" placeholder="Rua" {...register('street')} />
        <ErrorMessage
          errors={errors}
          name="street"
          render={({ message }) => <span>{message}</span>}
        />
      </InputWrapper>

      <GridContainer>
        <InputWrapper>
          <input
            type="number"
            placeholder="Número"
            {...register('houseNumber', { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name="houseNumber"
            render={({ message }) => <span>{message}</span>}
          />
        </InputWrapper>
        <ComplementInputWrapper>
          <input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
          {complement.length === 0 ? <span>Opcional</span> : ''}
        </ComplementInputWrapper>

        <InputWrapper>
          <input
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <ErrorMessage
            errors={errors}
            name="neighborhood"
            render={({ message }) => <span>{message}</span>}
          />
        </InputWrapper>

        <InputWrapper>
          <input type="text" placeholder="Cidade" {...register('city')} />
          <ErrorMessage
            errors={errors}
            name="city"
            render={({ message }) => <span>{message}</span>}
          />
        </InputWrapper>

        <InputWrapper>
          <input type="text" placeholder="UF" {...register('UF')} />
          <ErrorMessage
            errors={errors}
            name="UF"
            render={({ message }) => <span>{message}</span>}
          />
        </InputWrapper>
      </GridContainer>
    </AddressContainer>
  )
}
