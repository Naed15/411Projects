import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			beers: []
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		fetch("https://api.punkapi.com/v2/beers")
			.then(response => response.json())
			.then(parsedJSON => console.log(parsedJSON.map(beer => beer.name)))
			.then(parsedJSON =>
				parsedJSON.map(beer => ({
					name: `${beer.name}`,
					tagline: `${beer.tagline}`,
					abv: `${beer.abv}`,
					ibu: `${beer.ibu}`,
					mash_temp_value_c: `${beer.method.mash_temp.temp.value}`
				}))
			)
			.catch(error => console.log("parsing failed", error));
	}

	render() {
		// return (console.log('hi'))
		const { isLoading, beers } = this.state;
		return (
			<div>
				<header>Good Beers</header>
				<div className={`content ${isLoading ? "is-loading" : ""} `}></div>
			</div>
		);
	}
}

export default App;
