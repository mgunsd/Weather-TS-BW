import buildContext from './buildContext';
import weatherbit from 'api/weatherbit';
const WeatherReducer = (state, action) => {
  switch (action.type) {
    case 'city':
      return { ...state, city: action.payload };
    case 'weather':
      return { ...state, data: { ...action.payload } };
    case 'forecast':
      return { ...state, forecast: [...action.payload] };
    case 'error':
      return { ...state, errorMessage: action.payload };
    case 'menu':
      return { ...state, menu: action.payload };
    default:
      return state;
  }
};

const selectCity = dispatch => async (city) => {
  try {
    const response = await weatherbit.get('/current', {
      params: { city: city },
    });
    //console.log(response.data.data[0]);
    dispatch({ type: 'city', payload: city })
    dispatch({ type: 'weather', payload: response.data.data[0] });
    dispatch({ type: 'menu', payload: true });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'error', payload: err });
  }
};
const showForecast = dispatch => async (city) => {
  try {
    const response = await weatherbit.get('/forecast/daily', {
      params: { city: city },
    });
    //console.log(response.data.data);
    dispatch({ type: 'city', payload: city })
    dispatch({ type: 'forcast', payload: response.data.data });
    dispatch({ type: 'menu', payload: false });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'error', payload: err })
  }
};

export const { Provider, Context } = buildContext(
  WeatherReducer,
  { selectCity, showForecast },
  {
    city: 'London',
    menu: true,
    errorMessage: '',
    data: {
      temp: '20',
      weather: {
        description: 'Clear',
        code: 'c01n',
      }
    },
    forecast: [],
  },
);