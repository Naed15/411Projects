import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			peers: []
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		fetch("https://randomuser.me/api?results=25")
			.then(response => response.json())
			.then(parsedJSON => console.log(parsedJSON.results(peers => peers.name)))
			.then(peers => {
				this.setState({ peers: Data.peers });
			});
	}

	render() {
    return console.log(this.state.peers);
  }
  


  
}

export default App;
