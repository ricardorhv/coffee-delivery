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

const coffeePrice = 9.9

export const coffeeList = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: ['Tradicional'],
    price: coffeePrice,
    coffeeImage: expressoImg,
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    type: ['Tradicional'],
    price: coffeePrice,
    coffeeImage: americanoImg,
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    type: ['Tradicional'],
    price: coffeePrice,
    coffeeImage: expressoCremosoImg,
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    type: ['Tradicional', 'Gelado'],
    price: coffeePrice,
    coffeeImage: coffeeGeladoImg,
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    type: ['Tradicional', 'Com leite'],
    price: coffeePrice,
    coffeeImage: coffeeWithMilkImg,
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    type: ['Tradicional', 'Com leite'],
    price: coffeePrice,
    coffeeImage: latteImg,
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    type: ['Tradicional', 'Com leite'],
    price: coffeePrice,
    coffeeImage: capuccinoImg,
  },
  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    type: ['Tradicional', 'Com leite'],
    price: coffeePrice,
    coffeeImage: macchiatoImg,
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    type: ['Tradicional', 'Com leite'],
    price: coffeePrice,
    coffeeImage: mocaccinoImg,
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    type: ['Tradicional', 'Com leite'],
    price: coffeePrice,
    coffeeImage: chocolateHotImg,
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    type: ['Especial', 'Alcoólico', 'Gelado'],
    price: coffeePrice,
    coffeeImage: cubanoImg,
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    type: ['Especial'],
    price: coffeePrice,
    coffeeImage: macchiatoImg,
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    type: ['Especial'],
    price: coffeePrice,
    coffeeImage: arabeImg,
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    type: ['Especial', 'Alcoólico'],
    price: coffeePrice,
    coffeeImage: irlandesImg,
  },
]
