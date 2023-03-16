import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { CoffeeCounter } from '../../components/CoffeeCounter'
import { CoffeeSelected } from './components/CoffeeSelected'
import {
  AddressWrapper,
  CheckoutContainer,
  PaymentWays,
  InfoContainer,
  CartContainer,
  ConfirmOrderButton,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
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
              <input type="radio" name="payment-method" id="credit-card" />
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
            <CoffeeSelected />
            <CoffeeSelected />
          </section>
          <footer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
            <ConfirmOrderButton>Confirmar Pedido</ConfirmOrderButton>
          </footer>
        </CartContainer>
      </aside>
    </CheckoutContainer>
  )
}
