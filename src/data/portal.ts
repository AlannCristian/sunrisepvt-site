export const links = [
  ['agenda', 'Agenda'], ['flyers', 'Flyers'], ['djs', 'Os DJs'],
  ['sets', 'Sets'], ['galeria', 'Galeria'], ['contratar', 'Contratar'],
] as const;

export const events = [
  {name:'Edição Aurora', genre:'Trance · Psytrance', color:'#ff663c', description:'Uma pista ao ar livre, da primeira batida às primeiras luzes.'},
  {name:'Cosmic Connection', genre:'EDM · Progressive', color:'#a864f3', description:'Uma noite que começa no progressive e cresce até o pico da pista.'},
  {name:'Beyond the Horizon', genre:'Trance · Progressive', color:'#00f5d4', description:'Melodias longas e batidas que atravessam a madrugada.'},
];

export const djs = [
  {name:'VØLT', genre:'Progressive / EDM'},
  {name:'KAIRO', genre:'Trance'},
  {name:'PSYON', genre:'Psytrance'},
  {name:'AURA', genre:'Melodic / Progressive'},
];

type Set = {title:string; dj:string; style:string; embed?:string};
export const sets: Set[] = [
  {title:'Aurora Sessions #01', dj:'VØLT', style:'Progressive'},
  {title:'A Journey Beyond', dj:'KAIRO', style:'Trance'},
  {title:'Into the Psyverse', dj:'PSYON', style:'Psytrance'},
  {title:'Primeira Luz', dj:'AURA', style:'Melodic'},
];

export const gallery = [
  {src:'/media/crowd.webp', title:'Uma pista, mil conexões', category:'Pista & lasers'},
  {src:'/media/stage.webp', title:'As primeiras luzes', category:'Amanhecer'},
  {src:'/media/djs.webp', title:'Por trás das frequências', category:'Bastidores'},
];

// Preencha com o e-mail oficial para habilitar a abertura de rascunhos.
export const bookingEmail: string = '';
