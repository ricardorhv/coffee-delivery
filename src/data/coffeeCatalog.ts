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

export const coffeeCatalog = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: coffeePrice,
    coffeeImage: expressoImg,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional'],
    price: coffeePrice,
    coffeeImage: americanoImg,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
    price: coffeePrice,
    coffeeImage: expressoCremosoImg,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['Tradicional', 'Gelado'],
    price: coffeePrice,
    coffeeImage: coffeeGeladoImg,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com leite'],
    price: coffeePrice,
    coffeeImage: coffeeWithMilkImg,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['Tradicional', 'Com leite'],
    price: coffeePrice,
    coffeeImage: latteImg,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: coffeePrice,
    coffeeImage: capuccinoImg,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: coffeePrice,
    coffeeImage: macchiatoImg,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: coffeePrice,
    coffeeImage: mocaccinoImg,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['Tradicional', 'Com leite'],
    price: coffeePrice,
    coffeeImage: chocolateHotImg,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    price: coffeePrice,
    coffeeImage: cubanoImg,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['Especial'],
    price: coffeePrice,
    coffeeImage: macchiatoImg,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['Especial'],
    price: coffeePrice,
    coffeeImage: arabeImg,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['Especial', 'Alcoólico'],
    price: coffeePrice,
    coffeeImage: irlandesImg,
  },
]
