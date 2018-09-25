export const personalities = [
  { name: 'Fanny Pack', img: '/fanny.svg', params: 'asian' },
  {
    name: 'Rolling Backpack Kid',
    img: '/rolling.svg',
    params:
      'japacurry,ramen,izakaya,blowfish,okinawan,soba,udon,tonkatsu,riceshop,conveyorsushi,waffles'
  },
  {
    name: 'Commandante',
    img: '/commandante.svg',
    params: 'cuban,russian,cambodian,bistros'
  },
  {
    name: 'Morrissey',
    img: '/morrissey.svg',
    params:
      'popuprestaurants,vietnamese,ukranian,mexican,poutineries,malaysian,indonesian,dumplings,szechuan'
  },
  {
    name: 'Minnesotan',
    img: '/minnesota.svg',
    params:
      'rotisserie_chicken,sandwiches,tex-mex,steak,poutineries,potatoes,gastropubs,german'
  },
  {
    name: 'Super Kawaii',
    img: '/bunny.svg',
    params:
      'bubbletea,icecream,shavedice,shavedsnow,candy,conveyorsushi,waffles,milkbars,dumplings'
  },
  {
    name: 'Golden Retriever',
    img: '/retriever.svg',
    params:
      'rotisserie_chicken,sandwiches,tex-mex,steak,poutineries,potato,polish,diners,foodstands'
  },
  {
    name: 'Chad Muska',
    img: '/skate.svg',
    params:
      'cannabis_clinics,breakfast_brunch,burgers,beergarden,meatballs,tacos,nightfood,skateshops,skate_parks,coffeeshops'
  },
  { name: 'Anal Retentive', img: '/paper.svg', params: 'salad' },
  {
    name: 'Jewish Mom',
    img: '/bagel.svg',
    params:
      'jewish,kosher,mediterranean,greek,norwegian,potato,polish,diners,ukrainian,schnitzel,salad,dimsum,cantonese'
  },
  {
    name: 'Virgo',
    img: '/virgo.svg',
    params:
      'acaibowls,tapas,dancerestaurants,chilean,cuban,vegan,salad,ethiopian,bistros,dinnertheater,diners,cafes'
  },
  {
    name: 'Dale Carnegie',
    img: '/handshake.svg',
    params: 'salad,tapas,swedish,mediterranean,thai'
  },
  {
    name: 'Artiste',
    img: '/teeth.svg',
    params:
      'placentaencapsulation,srilankan,vegan,raw_food,popuprestaurants,indian,tapas,nightfood,conveyorsushi,nudist'
  },
  {
    name: 'Balloon Boy',
    img: '/ballon.svg',
    params:
      'hawaiian,bubbletea,icecream,shavedice,shavedsnow,candy,waffles,milkbars'
  },
  {
    name: 'Cryptoboi',
    img: '/bitcoin.svg',
    params:
      'cannabis_clinics,breakfast_brunch,cantonese,buffets,coffeeshops, virtualrealitycenters'
  },
  {
    name: 'Drunk',
    img: '/beer.svg',
    params:
      'delicatessen,bbq,foodstands,diners,burgers,hotdogs,cafeteria,convenience,conveyorsushi,beergarden,beerhall,belgian,coffeeshops'
  },
  { name: 'Nobody!', img: '/teeth.svg', params: 'mexican' }
];

export function getPersonality(props) {
  const code =
    props.subjective + props.objective + props.deductive + props.inductive;
  switch (code) {
    case 'intj':
      return personalities[0];
    case 'intp':
      return personalities[1];
    case 'entj':
      return personalities[2];
    case 'entp':
      return personalities[3];
    case 'infj':
      return personalities[4];
    case 'infp':
      return personalities[5];
    case 'enfj':
      return personalities[6];
    case 'enfp':
      return personalities[7];
    case 'istj':
      return personalities[8];
    case 'isfj':
      return personalities[9];
    case 'estj':
      return personalities[10];
    case 'esfj':
      return personalities[11];
    case 'istp':
      return personalities[12];
    case 'isfp':
      return personalities[13];
    case 'estp':
      return personalities[14];
    case 'esfp':
      return personalities[15];
    default:
      return personalities[16];
  }
}

export const personalityDesc = props => {};
