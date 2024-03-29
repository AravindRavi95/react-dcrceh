import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Round1 extends React.Component {
  constructor(props){
    this.state = {
      team1: "",
      team2: "",
      team3: ""
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  handleChange = event => {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit = (team, crtAns) =>{
    var teamName = team === "team1" ? 1 : team === "team2" ? 2 : 3 
    if(this.state[team] === crtAns){
      this.props.handleSubmit(team, 5, teamName, 1, this.state[team]);
    }else{
      this.props.handleSubmit(team, 0, teamName, 1, this.state[team]);   
    }
  }

  render(){
    const { team1, team2, team3 } = this.state
    return(
      <div>
        {this.props.question.map((val,index) => {
          if(val.Round === 1 && val.TeamName === 1 && this.props.timerCount===1){
            return (
              <div key ={index} >
              <Typography style={{textAlign:"center", fontSize: "20px"}}> Team {val.TeamName} </Typography>
              <FormControl component="fieldset" disabled={this.props.timerCount !== 1} >
                <FormLabel component="legend" style={{fontFamily: "Verdana"}}>{val.Question} </FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="team1"
                  value={team1}
                  onChange={this.handleChange}
                  style={{fontFamily: "Verdana"}}
                >
                  <FormControlLabel value={val.Option1} control={<Radio />} label={val.Option1} />
                  <FormControlLabel value={val.Option2} control={<Radio />} label={val.Option2} />
                  <FormControlLabel value={val.Option3} control={<Radio />} label={val.Option3} />
                  <FormControlLabel value={val.Option4} control={<Radio />} label={val.Option4} />
                  <FormControlLabel value={val.Option5} control={<Radio />} label={val.Option5} />
                </RadioGroup>
                <div>
                {this.props.timerCount === 1 &&<Button  variant="contained" color="primary" disabled={this.state.team1 === ""} onClick ={this.handleSubmit.bind(this,"team1",val.CorrectAnswer)}>Submit </Button>}
                </div>
              </FormControl>
              </div>
            )
          }
          if(val.Round === 1 && val.TeamName === 2 && this.props.timerCount===2){
            return (
              <div key ={index}>
              <Typography style={{textAlign : "center", fontSize: "20px"}}> Team {val.TeamName} </Typography>
              <FormControl component="fieldset" disabled={this.props.timerCount !== 2}>
                <FormLabel component="legend">{val.Question} </FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="team2"
                  value={team2}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value={val.Option1} control={<Radio />} label={val.Option1} />
                  <FormControlLabel value={val.Option2} control={<Radio />} label={val.Option2} />
                  <FormControlLabel value={val.Option3} control={<Radio />} label={val.Option3} />
                  <FormControlLabel value={val.Option4} control={<Radio />} label={val.Option4} />
                  <FormControlLabel value={val.Option5} control={<Radio />} label={val.Option5} />
                </RadioGroup>
                <div>
                {this.props.timerCount === 2 &&<Button  variant="contained" color="primary" disabled={this.state.team2 === ""} onClick ={this.handleSubmit.bind(this,"team2",val.CorrectAnswer)}>Submit </Button>}
                </div>
              </FormControl>
              </div>
            )
          }
          if(val.Round === 1 && val.TeamName === 3 && this.props.timerCount===3){
            return (
              <div key ={index}>
              <Typography style={{textAlign : "center", fontSize: "20px"}}> Team {val.TeamName} </Typography>
              <FormControl component="fieldset" disabled={this.props.timerCount !== 3}>
                <FormLabel component="legend">{val.Question} </FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="team3"
                  value={team3}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value={val.Option1} control={<Radio />} label={val.Option1} />
                  <FormControlLabel value={val.Option2} control={<Radio />} label={val.Option2} />
                  <FormControlLabel value={val.Option3} control={<Radio />} label={val.Option3} />
                  <FormControlLabel value={val.Option4} control={<Radio />} label={val.Option4} />
                  <FormControlLabel value={val.Option5} control={<Radio />} label={val.Option5} />
                </RadioGroup>
                <div>
                {this.props.timerCount === 3 &&<Button  variant="contained" color="primary" disabled={this.state.team3 === ""} onClick ={this.handleSubmit.bind(this,"team3",val.CorrectAnswer)}>Submit </Button>}
                </div>
              </FormControl>
              </div>
            )
          }
        })}
        
      </div>
    )
  }   
}
export default Round1;