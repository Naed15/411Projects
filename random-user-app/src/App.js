import React, { Component } from "react";
import './App.css';



function UserCard(props) {
	const cStyle = {
	listStyleType: "none"
	}

	let emailInfo = (
	<li style={cStyle}>{"Emial: " + props.user.email}</li>
	);

	let gender = (
	<li style={cStyle}>{"Gender: " + props.user.gender}</li>
	);
	  let age = (
	<li style={cStyle}>{"Age: " + props.user.dob.age + " years old"}</li>
  );
 let phone = (
 <li style={cStyle}>{props.user.phone}</li>
);
	
let location = (
<li style={cStyle}>{"From: " + props.user.location.street + ", " + props.user.location.city}</li>
);

let buttonText








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
			.then(results.peers => {
				this.setState({ peers: results.peers });
			});
	}

	render() {
    return console.log(this.state.peers);
  }
  handleClick = (index) => {
    const newArr = this.state.isHidden.map((item, newIndex) => {
      if (newIndex === index) {
        if (item === true) {
          return false;
        } else {
          return true;
        }
      } else {
        return item;
      }
    })

    this.setState({
      isHidden: newArr,
    })
  }


  render() {
    return (
      <div className="App">
        {this.state.results.map((user, index) =>
          <UserCard
            key={index}
            index={index}
            user={user}
            handleClick={this.handleClick}
            isHidden={this.state.isHidden} />
        )}
      </div>
    );
  }
}

export default App;


