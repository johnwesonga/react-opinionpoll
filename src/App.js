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

const VoteCount = ({totalVotes}) =>{
  return(
      <div className="VoteCount">
          <h2>Total Votes {totalVotes}</h2>
      </div>
  );
}



class OpinionPoll extends Component{
  constructor(props) {
    super(props);
    this.state = {selectedOption: '', totalVotes: 0}
  }

  handleClick(){
    console.log('submitted option', this.state.selectedOption);
    this.setState({totalVotes: this.state.totalVotes + 1})
  }

  handleOnChange(e){
    console.log('selected option', e.target.value);
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
          totalVotes={this.state.totalVotes}/>
      </div>
    );
  }
}


export default OpinionPoll;
