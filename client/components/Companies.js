import React from "react";
import { connect } from "react-redux";
import { fetchCompanies } from "../store/companiesReducer";
export class Companies extends React.Component {
  componentDidMount() {
    this.props.fetchCompanies();
  }

  render() {
    const companies = this.props.companies;

    return companies.map((company) => {
      return <div key={company.id}>{company.name}</div>;
    });
  }
}

const mapState = (state) => ({
  compannies: state.companies,
});

const mapDispatch = (dispatch) => ({
  getCompanies: () => dispatch(fetchCompanies()),
});

export default connect(mapState, mapDispatch)(Companies);
