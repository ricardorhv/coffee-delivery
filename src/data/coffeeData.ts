import americanoImg from '../assets/Americano.png'
import arabeImg from '../assets/Árabe.png'
import coffeeWithMilkImg from '../assets/Café-com-Leite.png'
import capuccinoImg from '../assets/Capuccino.png'
import chocolateHotImg from '../assets/Chocolate-Quente.png'
import coffeeGeladoImg from '../assets/Café-Gelado.png'
import cubanoImg from '../assets/Cubano.png'
import expressoCremosoImg from '../assets/Expresso-Cremoso.png'
import expressoImg from '../assets/Expresso.png'
import havaianoImg from '../assets/Havaiano.png'
import irlandesImg from '../assets/Irlandês.png'
import latteImg from '../assets/Latte.png'
import macchiatoImg from '../assets/Macchiato.png'
import mocaccinoImg from '../assets/Mocaccino.png'

import { v4 as uuid } from 'uuid'

const COFFEE_PRICE = 9.9

export const coffeeData = [
  {
    id: uuid(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: COFFEE_PRICE,
    coffeeImage: expressoImg,
  },
  {
    id: uuid(),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional'],
    price: COFFEE_PRICE,
    coffeeImage: americanoImg,
  },
  {
    id: uuid(),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
    price: COFFEE_PRICE,
    coffeeImage: expressoCremosoImg,
  },
  {
    id: uuid(),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['Tradicional', 'Gelado'],
    price: COFFEE_PRICE,
    coffeeImage: coffeeGeladoImg,
  },
  {
    id: uuid(),
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com leite'],
    price: COFFEE_PRICE,
    coffeeImage: coffeeWithMilkImg,
  },
  {
    id: uuid(),
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['Tradicional', 'Com leite'],
    price: COFFEE_PRICE,
    coffeeImage: latteImg,
  },
  {
    id: uuid(),
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: COFFEE_PRICE,
    coffeeImage: capuccinoImg,
  },
  {
    id: uuid(),
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: COFFEE_PRICE,
    coffeeImage: macchiatoImg,
  },
  {
    id: uuid(),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: COFFEE_PRICE,
    coffeeImage: mocaccinoImg,
  },
  {
    id: uuid(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['Tradicional', 'Com leite'],
    price: COFFEE_PRICE,
    coffeeImage: chocolateHotImg,
  },
  {
    id: uuid(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    price: COFFEE_PRICE,
    coffeeImage: cubanoImg,
  },
  {
    id: uuid(),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['Especial'],
    price: COFFEE_PRICE,
    coffeeImage: macchiatoImg,
  },
  {
    id: uuid(),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['Especial'],
    price: COFFEE_PRICE,
    coffeeImage: arabeImg,
  },
  {
    id: uuid(),
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['Especial', 'Alcoólico'],
    price: COFFEE_PRICE,
    coffeeImage: irlandesImg,
  },
]
