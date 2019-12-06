import React, {Component} from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Dashboard from './Dashboard';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

 function DenseAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" color="inherit">
            My music App
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
    this.setState({ isLoggedIn: true})
  }


  render() {
 
    return <div>
      <DenseAppBar/>
      {this.state.isLoggedIn ? (
        <Dashboard /> 
      ):(
        <LoginForm doLogIn={this.doLogIn}/>
      )}
    </div>
  }
  
}

function LoginForm (props){
  return(
    <div>
      <TextField label="Username *" />
			<br />
			<TextField label="Password * " />
      <br></br>
      <br></br>
       <button onClick={props.doLogIn}>Submit Login</button>

    </div>
     
  ) 
}


export default App;
