import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      filteredCountries: [],
      inputValue: ""
    };
  }

  async fetchApi() {
    const {data} = await axios.get("https://restcountries.com/v2/all");
    this.setState({ countries: data, filteredCountries:data });
    console.log(this.state);
  }
onChange(event){
  const inputData = event.target.value
  console.log(inputData);
  this.setState({inputValue: inputData});
  const filteredData = this.state.countries.filter((country) => country.name.toLowerCase().includes(inputData.toLowerCase()))
  this.setState({filteredCountries: filteredData})
  console.log(filteredData);
}


  componentDidMount() {
    console.log("inside mount");
    this.fetchApi();
  }

  render() {
    return (
      <div>
        <input onChange={(e)=>this.onChange(e)} type="text" />
        {this.state.filteredCountries.map((country) => {
          return <ul>
            <li>{country.name}</li>
          </ul>;
        })}
      </div>
    );
  }
}
