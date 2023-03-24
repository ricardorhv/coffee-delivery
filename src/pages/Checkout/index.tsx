import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'
import { formatNumber } from '../../utils/format-number'

import { CoffeeSelected } from './components/CoffeeSelected'

import {
  AddressWrapper,
  CheckoutContainer,
  PaymentWays,
  InfoContainer,
  CartContainer,
  ConfirmOrderButton,
  EmptyCart,
} from './styles'

export function Checkout() {
  const { coffeeListCart } = useContext(CoffeeContext)

  const cartInfo = {
    deliveryPrice: 3.5,
    subtotal: 0,
    total: 0,
  }

  const isCartEmpty = coffeeListCart.length === 0

  function getSubtotal() {
    const subtotal = coffeeListCart.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    return subtotal
  }

  function getTotal() {
    const subtotal = getSubtotal()
    return subtotal + cartInfo.deliveryPrice
  }

  cartInfo.total = getTotal()
  cartInfo.subtotal = getSubtotal()

  return isCartEmpty ? (
    <EmptyCart>
      <h1>Você não possui nenhum item no carrinho!</h1>
    </EmptyCart>
  ) : (
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
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
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
                name="payment-method"
                id="credit-card"
              />
            </div>
            <div>
              <label htmlFor="debit-card">
                <Bank size={16} />
                <span>Cartão de Débito</span>
              </label>
              <input type="radio" name="payment-method" id="debit-card" />
            </div>
            <div>
              <label htmlFor="cash">
                <Money size={16} />
                <span>Dinheiro</span>
              </label>
              <input type="radio" name="payment-method" id="cash" />
            </div>
          </PaymentWays>
        </InfoContainer>
      </div>
      <aside>
        <h4>Cafés selecionados</h4>
        <CartContainer>
          <section>
            {coffeeListCart.map((coffee) => (
              <CoffeeSelected key={coffee.id} {...coffee} />
            ))}
          </section>
          <footer>
            <div>
              <span>Total de itens</span>
              <span>R$ {formatNumber(cartInfo.subtotal)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {formatNumber(cartInfo.deliveryPrice)}</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ {formatNumber(cartInfo.total)}</strong>
            </div>
            <ConfirmOrderButton>Confirmar Pedido</ConfirmOrderButton>
          </footer>
        </CartContainer>
      </aside>
    </CheckoutContainer>
  )
}
