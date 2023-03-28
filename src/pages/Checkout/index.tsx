import { useContext } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { CoffeeContext } from '../../context/CoffeeContext'

import { Cart } from './components/Cart'
import InputMask from 'react-input-mask'
import {
  Address,
  CheckoutContainer,
  PaymentWays,
  Card,
  EmptyCart,
  ComplementInputWrapper,
  InputWrapper,
  AddressHeader,
  PaymentHeader,
  GridContainer,
} from './styles'

const orderFormValidationSchema = zod.object({
  CEP: zod
    .string()
    .min(9, 'Informe um CEP válido (XXXXX-XXX)')
    .max(9, 'Informe um CEP válido (XXXXX-XXX)')
    .regex(/\d{5}-\d{3}/, 'Formato inválido'),
  street: zod.string().min(3, 'Informe a rua'),
  houseNumber: zod
    .number({
      invalid_type_error: 'Informe o número da casa',
    })
    .int('Informe um número inteiro')
    .positive('Informe um número positivo'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(3, 'Informe o bairro'),
  city: zod.string().min(3, 'Informe a cidade'),
  UF: zod.string().min(2, 'Informe o UF').max(2, 'Informe um UF válido'),
  paymentWay: zod.enum([
    'Cartão de Crédito',
    'Cartão de Débito',
    'Dinheiro',
  ] as const),
})

type OrderFormData = zod.infer<typeof orderFormValidationSchema>

export function Checkout() {
  const { coffeeListCart } = useContext(CoffeeContext)
  const isCartEmpty = coffeeListCart.length === 0

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<OrderFormData>({
    defaultValues: {
      paymentWay: 'Cartão de Crédito',
    },
    resolver: zodResolver(orderFormValidationSchema),
  })
  const onSubmit: SubmitHandler<OrderFormData> = (data) => console.log(data)

  // isCartEmpty ? (
  //   <EmptyCart>
  //     <h1>Você não possui nenhum item no carrinho!</h1>
  //   </EmptyCart>
  // ) :
  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit)} action="/success">
      <div>
        <h4>Complete seu pedido</h4>
        <Card>
          <AddressHeader>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressHeader>

          <Address>
            <InputWrapper>
              <input type="text" placeholder="CEP" {...register('CEP')} />
              {errors.CEP && <span>{errors.CEP.message}</span>}
            </InputWrapper>
            <InputWrapper>
              <input type="text" placeholder="Rua" {...register('street')} />
              {errors.street && <span>{errors.street.message}</span>}
            </InputWrapper>

            <GridContainer>
              <InputWrapper>
                <input
                  type="number"
                  placeholder="Número"
                  {...register('houseNumber', { valueAsNumber: true })}
                />
                {errors.houseNumber && (
                  <span>{errors.houseNumber.message}</span>
                )}
              </InputWrapper>
              <ComplementInputWrapper>
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register('complement')}
                />
                <span>Opcional</span>
              </ComplementInputWrapper>

              <InputWrapper>
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
                {errors.neighborhood && (
                  <span>{errors.neighborhood.message}</span>
                )}
              </InputWrapper>

              <InputWrapper>
                <input type="text" placeholder="Cidade" {...register('city')} />
                {errors.city && <span>{errors.city.message}</span>}
              </InputWrapper>

              <InputWrapper>
                <input type="text" placeholder="UF" {...register('UF')} />
                {errors.UF && <span>{errors.UF.message}</span>}
              </InputWrapper>
            </GridContainer>
          </Address>
        </Card>

        <Card>
          <PaymentHeader>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentHeader>

          <PaymentWays>
            <div>
              <label htmlFor="credit-card">
                <CreditCard size={16} />
                <span>Cartão de Crédito</span>
              </label>
              <input
                type="radio"
                value="Cartão de Crédito"
                id="credit-card"
                {...register('paymentWay')}
              />
            </div>
            <div>
              <label htmlFor="debit-card">
                <Bank size={16} />
                <span>Cartão de Débito</span>
              </label>
              <input type="radio" id="debit-card" {...register('paymentWay')} />
            </div>
            <div>
              <label htmlFor="cash">
                <Money size={16} />
                <span>Dinheiro</span>
              </label>
              <input type="radio" id="cash" {...register('paymentWay')} />
            </div>
          </PaymentWays>
        </Card>
      </div>
      <aside>
        <h4>Cafés selecionados</h4>
        <Cart />
      </aside>
    </CheckoutContainer>
  )
}
