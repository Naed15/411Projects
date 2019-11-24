import React from "react";

class ThumbUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	thumbUp = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render = () => {
		return (
			<div>
				<div>Thumbs Up: {this.state.count}</div>
				<button onClick={this.thumbUp}>Yay!</button>
			</div>
		);
	};
}

export default ThumbUp;