const defaultState = {
  // url: 'http://localhost:3000',
  url: 'https://food-freud.herokuapp.com/',
  auth: {
    display_value: '',
    userid: null,
    token: null,
    logged_in: false,
    username: ''
  },
  personality: 1,
  location: null,
  question: 0,
  subjective: 'nobody!',
  objective: 'nobody!',
  deductive: 'nobody!',
  inductive: 'nobody!',
  spiciness: 0,
  favorites: [],
  restaurants: [
    {
      id: '1',
      image_url: '/chef.jpg',
      name: 'Loading...',
      categories: [{ title: 'nothing' }],
      location: { address1: 'nowhere' },
      rating: 0
    },
    {
      id: '1',
      image_url: '/chef.jpg',
      name: 'Loading...',
      categories: [{ title: 'nothing' }],
      location: { address1: 'nowhere' },
      rating: 0
    },
    {
      id: '1',
      image_url: '/chef.jpg',
      name: 'Loading...',
      categories: [{ title: 'nothing' }],
      location: { address1: 'nowhere' },
      rating: 0
    }
  ]
};

// REDUCERS
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'NEXT_QUESTION':
      if (state.question < 10) {
        return {
          ...state,
          question: state.question + 1
        };
      } else {
        return state;
      }

    case 'PREVIOUS_QUESTION':
      if (state.question > 0) {
        return {
          ...state,
          question: state.question - 1
        };
      } else {
        break;
      }

    case 'RESET':
      console.log('reset state');
      return {
        ...state,
        question: 0,
        subjective: 'nobody!',
        objective: 'nobody!',
        deductive: 'nobody!',
        inductive: 'nobody!',
        spiciness: 0,
        favorites: [],
        restaurants: [
          {
            id: '1',
            image_url: '/chef.jpg',
            name: 'Loading...',
            categories: [{ title: 'nothing' }],
            location: { address1: 'nowhere' },
            rating: 0
          },
          {
            id: '1',
            image_url: '/chef.jpg',
            name: 'Loading...',
            categories: [{ title: 'nothing' }],
            location: { address1: 'nowhere' },
            rating: 0
          },
          {
            id: '1',
            image_url: '/chef.jpg',
            name: 'Loading...',
            categories: [{ title: 'nothing' }],
            location: { address1: 'nowhere' },
            rating: 0
          }
        ]
      };

    case 'UPDATE_TRAIT':
      return {
        ...state,
        [action.trait]: action.payload
      };

    case 'ADD_RESTAURANTS':
      let list = [...action.payload];
      list.sort(() => {
        return 0.5 - Math.random();
      });
      return {
        ...state,
        restaurants: list
      };

    case 'ADD_FAV':
      const newRest = state.favorites;
      newRest.push(action.payload);
      const uniqFav = Array.from(new Set(newRest));
      const restArray = state.restaurants;
      const restaurant = state.restaurants.find(
        ({ id }) => id === action.payload
      );
      const ind = restArray.indexOf(restaurant);
      restaurant['fav'] = true;
      restArray[ind] = restaurant;
      return {
        ...state,
        favorites: uniqFav,
        restaurants: restArray
      };

    case 'REMOVE_FAV':
      let remRest = state.favorites;
      const index = remRest.indexOf(action.payload);
      remRest.splice(index, 1);
      const restArrayunf = state.restaurants;
      const restaurantunf = state.restaurants.find(
        ({ id }) => id === action.payload
      );
      const unf = restArrayunf.indexOf(restaurantunf);
      restaurantunf['fav'] = false;
      restArrayunf[unf] = restaurantunf;
      return {
        ...state,
        favorites: remRest,
        restaurants: restArrayunf
      };

    case 'LOG_IN':
      return {
        ...state,
        auth: action.payload
      };

    default:
      return state;
  }
}
