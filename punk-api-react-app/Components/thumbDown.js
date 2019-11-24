import React from "react";

class ThumbDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	thumbDown = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render = () => {
		return (
			<div>
				<div>Thumbs Down: {this.state.count}</div>
				<button onClick={this.thumbDown}>Nay!</button>
			</div>
		);
	};
}

export default ThumbDown;