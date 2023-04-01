import { useContext } from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
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
import {
  CheckoutContainer,
  PaymentWays,
  Card,
  EmptyCart,
  AddressHeader,
  PaymentHeader,
} from './styles'
import { RadioInput } from './components/RadioInput'
import { AddressInputs } from './components/AddressInputs'
import { useNavigate } from 'react-router-dom'

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
  UF: zod
    .string()
    .min(2, 'Informe o UF')
    .max(2, 'Informe um UF válido')
    .toUpperCase(),
  paymentWay: zod.enum([
    'Cartão de Crédito',
    'Cartão de Débito',
    'Dinheiro',
  ] as const),
})

type OrderFormData = zod.infer<typeof orderFormValidationSchema>

export function Checkout() {
  const {
    createNewOrder,
    cartState: { selectedCoffeeList },
  } = useContext(CoffeeContext)
  const isCartEmpty = selectedCoffeeList.length === 0
  console.log(selectedCoffeeList)

  const navigate = useNavigate()

  const orderForm = useForm<OrderFormData>({
    defaultValues: {
      paymentWay: 'Cartão de Crédito',
    },
    resolver: zodResolver(orderFormValidationSchema),
  })
  const onSubmit: SubmitHandler<OrderFormData> = (data) => {
    createNewOrder(data)
    navigate('/success')
  }

  return isCartEmpty ? (
    <EmptyCart>
      <h1>Você não possui nenhum item no carrinho!</h1>
    </EmptyCart>
  ) : (
    <FormProvider {...orderForm}>
      <CheckoutContainer onSubmit={orderForm.handleSubmit(onSubmit)}>
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

            <AddressInputs />
          </Card>

          <Card>
            <PaymentHeader>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeader>

            <PaymentWays>
              <RadioInput inputID="credit-card" value="Cartão de Crédito" />
              <RadioInput inputID="debit-card" value="Cartão de Débito" />
              <RadioInput inputID="cash" value="Dinheiro" />
            </PaymentWays>
          </Card>
        </div>
        <aside>
          <h4>Cafés selecionados</h4>
          <Cart />
        </aside>
      </CheckoutContainer>
    </FormProvider>
  )
}
