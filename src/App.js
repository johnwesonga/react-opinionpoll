import React, { Component } from 'react';
import './App.css';

const PollOption = ({options,selected, onChange}) => {
   return (
    <div className="pollOption">
      {options.map((choice, index) => (
        <label key={index}>
        <input type="radio" 
                name="vote" 
                value={choice.value} 
                key={index}
                checked={selected === choice.value}
                onChange={onChange}/>
                {choice.text}
        </label>
      ))}  
    </div>
   );
};

const VoteCount = ({totalVotes, choiceOneVotes, choiceTwoVotes}) =>{
  return(
      <div className="VoteCount">
          <h2>Total Votes {totalVotes}</h2>
          <ul>
            <li>Yes: {choiceOneVotes}</li>
            <li>No: {choiceTwoVotes}</li>
          </ul>
      </div>
  );
}



class OpinionPoll extends Component{
  constructor(props) {
    super(props);
    this.state = {selectedOption: '', 
                  totalVotes: 0,
                  choiceOneVotes: 0,
                  choiceTwoVotes: 0}
  }

  handleClick(){
    console.log('submitted option', this.state.selectedOption);
    this.setState(prevState => {
      return {totalVotes: prevState.totalVotes + 1}
    })
   if(this.state.selectedOption === "yes"){
    this.setState(prevState => {
      return {choiceOneVotes: prevState.choiceOneVotes + 1}
    })
   }else{
    this.setState(prevState => {
      return {choiceTwoVotes: prevState.choiceTwoVotes + 1}
    })
   }
  }

  handleOnChange(e){
    console.log('selected option', e.target.name);
    this.setState({ selectedOption: e.target.value});
  }

  render(){
    return (
      <div className="poll">
        {this.props.model.question}
        <PollOption 
          options={this.props.model.choices}
          onChange={(e) => this.handleOnChange(e)}
          selected={this.state.selectedOption}/>

        <button onClick={() => this.handleClick()}>Vote!</button>
        <VoteCount 
          totalVotes={this.state.totalVotes}
          choiceOneVotes={this.state.choiceOneVotes}
          choiceTwoVotes={this.state.choiceTwoVotes}/>
      </div>
    );
  }
}


export default OpinionPoll;
