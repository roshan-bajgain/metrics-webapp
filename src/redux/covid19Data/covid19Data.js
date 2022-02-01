import Axios from 'axios';

const baseUrl = 'https://api.covid19api.com/summary';

const FETCH_DATA = 'covidMetrics/covid19Data/FETCH_DATA';

// initial-state
const initialState = [];

// action
const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

// api function
export const fetchDataApi = () => async (dispatch) => {
  const returnValue = await Axios.get(baseUrl);
  const { data: { Countries } } = returnValue;
  dispatch(fetchData(Countries));
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
