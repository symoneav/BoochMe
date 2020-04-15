import axios from "axios";

const SET_COMPANIES = "SET_COMPANIES";

export const setCompanies = (companies) => ({
  type: SET_COMPANIES,
  companies,
});

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

export default function companiesReducer(state = [], action) {
  switch (action.type) {
    case SET_COMPANIES:
      return action.companies;
    default:
      return state;
  }
}
