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
import { ToastContainer } from 'react-toastify'

const orderFormValidationSchema = zod.object({
  CEP: zod.coerce
    .number()
    .min(10000000, 'Informe um CEP válido')
    .max(99999999, 'Informe um CEP válido'),
  street: zod
    .string()
    .nonempty('Esse campo é obrigatório')
    .min(3, 'Informe um valor válido'),
  houseNumber: zod.coerce
    .number()
    .min(1, 'Esse campo é obrigatório')
    .int('Informe um número inteiro'),
  complement: zod.string().optional(),
  neighborhood: zod
    .string()
    .nonempty('Esse campo é obrigatório')
    .min(3, 'Informe um valor válido'),
  city: zod
    .string()
    .nonempty('Esse campo é obrigatório')
    .min(3, 'Informe um valor válido'),
  UF: zod
    .string()
    .nonempty('Esse campo é obrigatório')
    .min(2, 'Informe o UF')
    .max(2, 'Informe um UF válido')
    .toUpperCase(),
  paymentWay: zod.enum([
    'Cartão de Crédito',
    'Cartão de Débito',
    'Dinheiro',
  ] as const),
})

export type OrderFormData = zod.infer<typeof orderFormValidationSchema>

export function Checkout() {
  const {
    createNewOrder,
    cartState: { selectedCoffeeList },
    currentTheme,
  } = useContext(CoffeeContext)
  const isCartEmpty = selectedCoffeeList.length === 0

  const navigate = useNavigate()

  const orderForm = useForm<OrderFormData>({
    defaultValues: {
      paymentWay: 'Cartão de Crédito',
    },
    resolver: zodResolver(orderFormValidationSchema),
  })
  const { handleSubmit } = orderForm
  const onSubmit: SubmitHandler<OrderFormData> = (data, e) => {
    createNewOrder(data)
    navigate('/success')
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        theme={currentTheme}
        pauseOnHover={false}
      />
      {isCartEmpty ? (
        <EmptyCart>
          <h1>Você não possui nenhum item no carrinho!</h1>
        </EmptyCart>
      ) : (
        <CheckoutContainer action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h4>Complete seu pedido</h4>
            <FormProvider {...orderForm}>
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
            </FormProvider>
          </div>
          <aside>
            <h4>Cafés selecionados</h4>
            <Cart />
          </aside>
        </CheckoutContainer>
      )}
    </>
  )
}
