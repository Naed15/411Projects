import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Switch, Slider, MenuItem, TextField} from '@material-ui/core'




class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      online: true,

    };
  } 


handleChange = (name) => event => {
  this.setState({ ...this.state, [name]: event.target.checked });
}


  render(){
  return (
<div>
<Card className="card">
    <CardContent className="insideCard">
    <Typography color="textSecondary" gutterBottom>
     Online Mode
     </Typography>
    <Typography variant="h5" component="h2">
     </Typography>
    <Typography variant="body2" component="p">
     Is this application connected to the internet?
        </Typography>
        </CardContent>
        <CardActions className="switch">
         <Switch
        checked={this.state.online}
         onChange={this.handleChange('online')}
        value="online"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </CardActions>
        </Card>

        <Card className="card">
          <CardContent className="insideCard">
            <Typography color="textSecondary" gutterBottom>
              Master Volume
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography variant="body2" component="p">
              Overrides all other sound settings in this application.
            </Typography>
          </CardContent>
          <CardActions className="switch">
          <Slider
            defaultValue={30}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={100}
          />
          </CardActions>
        </Card>

        <Card className="card">
          <CardContent className="insideCard">
            <Typography color="textSecondary" gutterBottom>
              Sound Quality
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography variant="body2" component="p">
              Manually control the music quality in event of poor connection.
            </Typography>
          </CardContent>
          <CardActions className="switch">
          <TextField className="dropDown"
            select label="Low"
            select label="Normal"
            select label="High"
            
            
            > 
      
          </TextField>
          
         
          </CardActions>
        </Card>
        
</div>
   
    
  );
}
}

export default Dashboard;