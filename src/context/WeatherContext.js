import buildContext from './buildContext';
import weatherbit from 'api/weatherbit';
const WeatherReducer = (state, action) => {
  switch (action.type) {
    case 'city':
      return { ...state, city: action.payload };
    case 'weather':
      return { ...state, data: { ...state.data, ...action.payload } };
    case 'error':
      return { errorMessage: action.payload };
    default:
      return state;
  }
};

//i could seperate api and reference to weatherbit

const selectCity = dispatch => async (city) => {
  try {
    const response = await weatherbit.get('/current', {
      params: { city: city },
    });

    console.log(response.data.data[0]);
    dispatch({ type: 'city', payload: city })
    dispatch({ type: 'weather', payload: response.data.data[0] });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'error', payload: err })
  }
};

export const { Provider, Context } = buildContext(
  WeatherReducer,
  { selectCity },
  {
    city: 'London',
    errorMessage: '',
    data: {
      temp: '99',
    },
  }
);