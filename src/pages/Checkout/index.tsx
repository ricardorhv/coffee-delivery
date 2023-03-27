import { useContext } from 'react'

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
  AddressWrapper,
  CheckoutContainer,
  PaymentWays,
  InfoContainer,
  EmptyCart,
} from './styles'
import { useForm } from 'react-hook-form'

enum PaymentWaysEnum {
  creditCard = 'Cartão de Crédito',
  debitCard = 'Cartão de Débito',
  cash = 'Dinheiro',
}

interface FormProps {
  CEP: string
  street: string
  houseNumber: number
  complement: string
  neighborhood: string
  city: string
  UF: string
  paymentWay: PaymentWaysEnum
}

export function Checkout() {
  const { coffeeListCart } = useContext(CoffeeContext)
  const isCartEmpty = coffeeListCart.length === 0

  const { register, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      paymentWay: PaymentWaysEnum.creditCard,
    },
  })

  // isCartEmpty ? (
  //   <EmptyCart>
  //     <h1>Você não possui nenhum item no carrinho!</h1>
  //   </EmptyCart>
  // ) :
  return (
    <CheckoutContainer action="/success">
      <div>
        <h4>Complete seu pedido</h4>
        <InfoContainer iconColor="yellow-dark">
          <header>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <AddressWrapper>
            <input type="text" placeholder="CEP" {...register('CEP')} />
            <input type="text" placeholder="Rua" {...register('street')} />
            <input
              type="text"
              placeholder="Número"
              {...register('houseNumber')}
            />
            <input
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
            <input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <input type="text" placeholder="Cidade" {...register('city')} />
            <input type="text" placeholder="UF" {...register('UF')} />
          </AddressWrapper>
        </InfoContainer>

        <InfoContainer iconColor="purple">
          <header>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

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
        </InfoContainer>
      </div>
      <aside>
        <h4>Cafés selecionados</h4>
        <Cart />
      </aside>
    </CheckoutContainer>
  )
}
