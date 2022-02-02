import Axios from 'axios';

const baseUrl = 'https://api.covid19api.com/summary';

const FETCH_DATA = 'covidMetrics/covid19Data/FETCH_DATA';

// initial-state
const initialState = {
  countriesData: [],
  globalData: {},
};

// action
const fetchData = (Countries, Global) => ({
  type: FETCH_DATA,
  Countries,
  Global,
});

// api function
export const fetchDataApi = () => async (dispatch) => {
  const returnValue = await Axios.get(baseUrl);
  const { data: { Countries, Global } } = returnValue;
  dispatch(fetchData(Countries, Global));
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, countriesData: action.Countries, globalData: action.Global };
    default:
      return state;
  }
};

export default reducer;
