import { Component } from "react";
import React from "react";
import "./App.css";
import ThumbUp from "./components/thumbUp";
import ThumbDown from "./components/thumbDown";
import Comments from "./components/comments";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beers: []
		};
	}

	btnClick = () => {
		fetch("https://api.punkapi.com/v2/beers")
			.then(res => res.json())
			.then(data => {
				this.setState({ beers: data });
			});
	};

	like = beer => {
		console.log(beer);
	};

	render() {
		return (
			<div clasName="App">
				<button onClick={this.btnClick}>All Beers Ya Dirty Animal!</button>
				{this.state.beers.map(beer => {
					return (
						<div key={beer.id}>
							<p className="description">{beer.description}</p>
							<img src={beer.image_url} alt="bottles of beer" />
							<ThumbUp />
							<ThumbDown />
							<Comments />
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
