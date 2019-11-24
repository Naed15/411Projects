import React from "react";

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			items: []
		};
	}
	inputUpdate = event => {
		this.setState({ input: event.target.value });
	};

	formSubmit = event => {
		event.preventDefault();
		this.setState({ items: [...this.state.items, this.state.input] });
	};

	render() {
		console.log(this.state.items);

		return (
			<div className="comments">
				<h3>Leave a Comment!</h3>
				<form onSubmit={this.formSubmit}>
					<input value={this.state.input} onChange={this.inputUpdate} />
					<button>Post</button>
				</form>
				<ul>
					{this.state.items.map((items, index) => {
						return <li key={index}>{this.state.items[index]}</li>;
					})}
				</ul>
			</div>
		);
	}
}

export default Comments;