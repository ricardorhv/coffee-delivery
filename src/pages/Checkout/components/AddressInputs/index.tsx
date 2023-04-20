import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'
import {
  AddressContainer,
  ComplementInputWrapper,
  GridContainer,
  InputWrapper,
} from './styles'
import { useEffect } from 'react'
import { OrderFormData } from '../..'
import axios from 'axios'

export function AddressInputs() {
  const {
    register,
    watch,
    formState: { errors },
    setValue,
    setError,
    reset,
  } = useFormContext<OrderFormData>()
  const complement = watch('complement') || ''
  const CEP = watch('CEP')

  useEffect(() => {
    if (CEP >= 10000000 && CEP <= 99999999) {
      axios.get(`https://viacep.com.br/ws/${CEP}/json`).then(({ data }) => {
        if (data.erro) {
          setError(
            'CEP',
            { type: 'custom', message: 'Informe um CEP válido' },
            { shouldFocus: true },
          )
          reset({
            CEP,
            city: '',
            UF: '',
            street: '',
            neighborhood: '',
          })
        } else {
          setValue('city', data.localidade)
          setValue('UF', data.uf)
          setValue('street', data.logradouro)
          setValue('neighborhood', data.bairro)
        }
      })
    }
  }, [CEP, setValue, setError, reset])

  return (
    <AddressContainer>
      <InputWrapper>
        <input type="number" placeholder="CEP" {...register('CEP')} />
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
            {...register('houseNumber')}
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
