export const links = [
  ['agenda', 'Agenda'], ['flyers', 'Flyers'], ['djs', 'Os DJs'],
  ['sets', 'Sets'], ['galeria', 'Galeria'], ['contratar', 'Contratar'],
] as const;

export const events = [
  {name:'Edição Aurora', genre:'Trance · Psytrance', color:'#ff663c', cover:'/media/stage.webp', headline:'Sunrise PVT', edition:'Edição Aurora', description:'Uma pista ao ar livre, da primeira batida às primeiras luzes.'},
  {name:'Cosmic Connection', genre:'EDM · Progressive', color:'#a864f3', cover:'/media/crowd.webp', headline:'Cosmic Connection', edition:'Uma nova frequência', description:'Uma noite que começa no progressive e cresce até o pico da pista.'},
  {name:'Beyond the Horizon', genre:'Trance · Progressive', color:'#ca5883', cover:'/media/stage.webp', headline:'Beyond the Horizon', edition:'Do entardecer ao amanhecer', description:'Melodias longas e batidas que atravessam a madrugada.'},
];

export const djs = [
  {name:'VØLT', genre:'Progressive / EDM'},
  {name:'KAIRO', genre:'Trance'},
  {name:'PSYON', genre:'Psytrance'},
  {name:'AURA', genre:'Melodic / Progressive'},
];

type Set = {title:string; dj:string; style:string; cover:string; embed?:string};
export const sets: Set[] = [
  {title:'Aurora Sessions #01', dj:'VØLT', style:'Progressive', cover:'/media/stage.webp'},
  {title:'A Journey Beyond', dj:'KAIRO', style:'Trance', cover:'/media/crowd.webp'},
  {title:'Into the Psyverse', dj:'PSYON', style:'Psytrance', cover:'/media/stage.webp'},
  {title:'Primeira Luz', dj:'AURA', style:'Melodic', cover:'/media/crowd.webp'},
];

export const gallery = [
  {src:'/media/crowd.webp', title:'Uma pista, mil conexões', category:'Pista & lasers'},
  {src:'/media/stage.webp', title:'As primeiras luzes', category:'Amanhecer'},
  {src:'/media/djs.webp', title:'Por trás das frequências', category:'Bastidores'},
];

// Preencha com o e-mail oficial para habilitar a abertura de rascunhos.
export const bookingEmail: string = '';

// Adicione o arquivo em public/media e preencha logo com seu caminho público.
export const developerCredit: { name: string; logo?: string; url?: string } = {
  name: 'AO Dev',
};
