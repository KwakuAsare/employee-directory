import React, { Component } from "react";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class DirectoryPage extends Component {
    state = {
        search: "",
        results: []
    }

    componentDidMount() {
        this.searchEmp("");
        //Axios.get
    };

    searchEmp = query => {
        API.search(query)
        .then(res => this.setState({ results: res.data.results}))
        .catch(err => console.log(err));
    };
    
    handleInputChange = event => {
        const name  = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmp(this.state.search);
    };

    render() {
        return(
            <div>
        <EmployeeSearch
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList results={this.state.results} />
      </div>
        )
    }
}

export default DirectoryPage;


