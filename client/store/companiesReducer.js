import axios from "axios";

const SET_COMPANIES = "SET_COMPANIES";
const GET_COMPANY ='GET_COMPANY'

export const setCompanies = (companies) => ({
  type: SET_COMPANIES,
  companies,
});

export const getCompany=(company)=>({
  type:GET_COMPANY,
  company
})

export const fetchCompanies = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get("/api/companies");
      dispatch(setCompanies(data));
    };
  } catch (err) {
    console.log("trouble fetching campuses");
  }
};

export const fetchCompany=(id)=>{
  return async dispatch =>{
  try{
      const {data} = await axios.put('/api/map', id)
      console.log('at your company thunk', data)
      dispatch(getCompany(data))
    }
  catch(err){
    console.log("company not found")
  }
}

}

export default function companiesReducer(state = {kombuchas:[{id:'',flavor:'option'}]}, action) {
  switch (action.type) {
    case SET_COMPANIES:
      return action.companies;
    case GET_COMPANY:
     return action.company
    default:
      return state;
  }
}
