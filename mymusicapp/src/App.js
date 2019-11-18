import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Dashboard from "./Dashboard";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	}
}));

function DenseAppBar() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar variant="dense">
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					></IconButton>
					<Typography variant="h6" color="inherit">
						Photos
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false
		};
	}

	doLogIn = () => {
		this.setState({ isLoggedIn: true });
	};
//get react router here. then in Router.js import components Login & Dashbaord
	render() {
		return (
			<div>
			<DenseAppBar />
				<TextField label="Username *" />
				<br />
				<TextField label="Password * " />
				<br />
				{this.state.isLoggedIn ? (
			<Dashboard />
				) : (
				<LoginForm doLogIn={this.doLogIn} />
				)}
			</div>
		);
	}
}

function LoginForm(props) {
	return <button onClick={props.doLogIn}>click me</button>;
}
// function App() {
// return (
// <div className="App">
// <UserGreeting />

// <DenseAppBar/>

// <TextField label="Enter some text" />
// <br></br>
// <TextField label="Enter some text" />
// <br></br>
// <Button variant="contained" color="secondary">
// Submit
// </Button>

// <Dashboard/>
// </div>
// );
// }

export default App;
