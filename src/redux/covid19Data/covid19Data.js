import Axios from "axios";

const baseUrl = 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true';

const FETCH_DATA = 'covidMetrics/covid19Data/FETCH_DATA';

//action
const fetchData = (payload) => ({
    type: FETCH_DATA,
    payload,
  });
 
 export const fetchDataApi = () => async (dispatch) => {
    const returnValue = await Axios.get(baseUrl);
    const { data } = returnValue;
    dispatch(fetchData(data))
 } 

 // initial-state
const initialState = [];

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