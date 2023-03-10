import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { CoffeeCounter } from '../../components/CoffeeCounter'
import { CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <section>
        <h4>Complete seu pedido</h4>
        <div>
          <header>
            <div>
              <MapPinLine size={22} />
              <span>Endereço de Entrega</span>
            </div>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </header>

          <form action="">
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </form>

          <div>
            <header>
              <div>
                <CurrencyDollar size={22} />
                <span>Pagamento</span>
              </div>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </header>

            <footer>
              <label>
                <input type="radio" />
                <div>
                  <CreditCard size={16} />
                  <span>Cartão de Crédito</span>
                </div>
              </label>
              <label>
                <div>
                  <Bank size={16} />
                  <span>Cartão de Débito</span>
                </div>
              </label>
              <label>
                <div>
                  <Money size={16} />
                  <span>Dinheiro</span>
                </div>
              </label>
            </footer>
          </div>
        </div>
      </section>
      <aside>
        <h4>Cafés selecionados</h4>
        <div>
          <div>
            <div>
              <img src="" alt="" />
              <div>
                <div>
                  <span>Expresso Tradicional</span>
                  <strong>R$ 9,90</strong>
                </div>
                <div>
                  <CoffeeCounter />
                  <button>
                    <Trash size={16} />
                    Remover
                  </button>
                </div>
              </div>
            </div>
          </div>
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
            <button>Confirmar Pedido</button>
          </footer>
        </div>
      </aside>
    </CartContainer>
  )
}
