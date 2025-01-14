import image0 from '../../images/items/0.png';
import image1 from '../../images/items/1.png';
import image2 from '../../images/items/2.png';
import image3 from '../../images/items/3.png';
import image4 from '../../images/items/4.png';
import image5 from '../../images/items/5.png';
import image6 from '../../images/items/6.png';
import image7 from '../../images/items/7.png';
import image8 from '../../images/items/8.png';
import image9 from '../../images/items/9.png';
import image10 from '../../images/items/10.png';
import image11 from '../../images/items/11.png';
import image12 from '../../images/items/12.png';
import image13 from '../../images/items/13.png';
import image14 from '../../images/items/14.png';
import image15 from '../../images/items/15.png';
import image16 from '../../images/items/16.png';
import image17 from '../../images/items/17.png';
import image18 from '../../images/items/18.png';
import image19 from '../../images/items/19.png';
import image20 from '../../images/items/20.png';
import image21 from '../../images/items/21.png';
import image22 from '../../images/items/22.png';
import image23 from '../../images/items/23.png';
import image24 from '../../images/items/24.png';
import image25 from '../../images/items/25.png';
import image26 from '../../images/items/26.png';
import image27 from '../../images/items/27.png';
import image28 from '../../images/items/28.png';
import image29 from '../../images/items/29.png';
import image30 from '../../images/items/30.png';

export type Item = {
  id: number;
  name: string;
  priceText: string;
  price: number;
  image: string;
};

export const items: Item[] = [
  {
    id: 0,
    name: 'Só pra ninguém dizer que eu não dei nada',
    price: 55,
    priceText: 'R$ 55,00',
    image: image0,
  },
  {
    id: 1,
    name: 'Starbucks no aeroporto',
    price: 95,
    priceText: 'R$ 95,00',
    image: image1,
  },
  {
    id: 2,
    name: 'Cota para a Luiza terminar de ver One Piece',
    price: 100,
    priceText: 'R$ 100,00',
    image: image2,
  },
  {
    id: 3,
    name: 'Preferência no quarto de visitas',
    price: 150,
    priceText: 'R$ 150,00',
    image: image3,
  },
  {
    id: 4,
    name: 'Mensalidade de academia para o João ficar sheipado',
    price: 170,
    priceText: 'R$ 170,00',
    image: image4,
  },
  {
    id: 5,
    name: 'Toalha para a noiva secar as lágrimas depois do jogo do 49ers',
    price: 200,
    priceText: 'R$ 200,00',
    image: image5,
  },
  {
    id: 6,
    name: 'Cobertor para a Luiza estar sempre coberta de razão',
    price: 250,
    priceText: 'R$ 250,00',
    image: image6,
  },
  {
    id: 7,
    name: 'Cota para a noiva jogar o buquê para a sua/seu namorada/o',
    price: 300,
    priceText: 'R$ 300,00',
    image: image7,
  },
  {
    id: 8,
    name: 'Contratação de serviço do Cacique Cobra Coral para fazer sol no casamento',
    price: 350,
    priceText: 'R$ 350,00',
    image: image8,
  },
  {
    id: 9,
    name: 'Ração especial para o Shiro não fazer xixi no sofá',
    price: 400,
    priceText: 'R$ 400,00',
    image: image9,
  },
  {
    id: 10,
    name: 'Aulas de volei para a Luiza aprender a sacar por cima',
    price: 420,
    priceText: 'R$ 420,00',
    image: image10,
  },
  {
    id: 11,
    name: 'Ingresso para um jogo da NFL em NYC',
    price: 450,
    priceText: 'R$ 450,00',
    image: image11,
  },
  {
    id: 12,
    name: 'Tênis de volei para o João',
    price: 500,
    priceText: 'R$ 500,00',
    image: image12,
  },
  {
    id: 13,
    name: 'Diária de hotel para noite de núpcias',
    price: 550,
    priceText: 'R$ 550,00',
    image: image13,
  },
  {
    id: 14,
    name: 'Parcela do nosso futuro carro',
    price: 600,
    priceText: 'R$ 600,00',
    image: image14,
  },
  {
    id: 15,
    name: 'Primeiro divã para o João dar uma de Freud',
    price: 650,
    priceText: 'R$ 650,00',
    image: image15,
  },
  {
    id: 16,
    name: 'Lanchinho em NYC com o dólar a R$6',
    price: 700,
    priceText: 'R$ 700,00',
    image: image16,
  },
  {
    id: 17,
    name: 'Cota para o João assistir mais um filme de terror com a Luiza',
    price: 750,
    priceText: 'R$ 750,00',
    image: image17,
  },
  {
    id: 18,
    name: 'Ajuda para a aposentadoria dos noivos',
    price: 800,
    priceText: 'R$ 800,00',
    image: image18,
  },
  {
    id: 19,
    name: 'Noite romântica em NYC',
    price: 850,
    priceText: 'R$ 850,00',
    image: image19,
  },
  {
    id: 20,
    name: 'Cota para ser mencionado no discurso dos noivos',
    price: 900,
    priceText: 'R$ 900,00',
    image: image20,
  },
  {
    id: 21,
    name: 'Visto americano para o João',
    price: 950,
    priceText: 'R$ 950,00',
    image: image21,
  },
  {
    id: 22,
    name: 'Cota para a noiva NÃO jogar o buquê para a sua/seu namorada/o',
    price: 1000,
    priceText: 'R$ 1000,00',
    image: image22,
  },
  {
    id: 23,
    name: 'Quero me tornar o amigo preferido dos noivos!',
    price: 1500,
    priceText: 'R$ 1500,00',
    image: image23,
  },
  {
    id: 24,
    name: 'Primeira mensalidade da escolinha do futuro filho',
    price: 2000,
    priceText: 'R$ 2000,00',
    image: image24,
  },
  {
    id: 25,
    name: 'Ajuda para contratar hora extra e fazer a festa durar até de manhã',
    price: 2500,
    priceText: 'R$ 2500,00',
    image: image25,
  },
  {
    id: 26,
    name: 'Cota para ser dindo/dinda do primeiro filho',
    price: 3000,
    priceText: 'R$ 3000,00',
    image: image26,
  },
  {
    id: 27,
    name: 'Passagem para NYC para a lua de mel dos noivos',
    price: 3500,
    priceText: 'R$ 3500,00',
    image: image27,
  },
  {
    id: 28,
    name: 'Permissão para fazer pedido de casamento durante a festa',
    price: 4000,
    priceText: 'R$ 4000,00',
    image: image28,
  },
  {
    id: 29,
    name: 'Permissão para anunciar gravidez durante a festa',
    price: 4500,
    priceText: 'R$ 4500,00',
    image: image29,
  },
  {
    id: 30,
    name: 'Quero me tornar o parente preferido dos noivos!',
    price: 5000,
    priceText: 'R$ 5000,00',
    image: image30,
  },
];
