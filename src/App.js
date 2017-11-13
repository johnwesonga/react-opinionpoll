import React, { Component } from 'react';
import './App.css';

const PollOption = ({options,selected, onChange}) => {
   return (
    <div className="pollOption">
      {options.map((choice, index) => (
        <label key={index}>
        <input type="radio" 
                name="vote" 
                key={index}
                onChange={(e)=>onChange(e,index)}/>
                {choice.name} <br/>
        </label>
      ))}  
    </div>
   );
};

const VoteCount = ({totalVotes, options}) =>{
  return(
      <div className="VoteCount">
          <h2>Total Votes {totalVotes}</h2>
          <ul>
          {options.map((element,index)=>(
            <li key={index}>{element.name}: {element.count}</li>
          ))}
        </ul>
      </div>
  );
}



class OpinionPoll extends Component{
  constructor(props) {
    super(props);
    this.state = {selectedOption: 0, 
                  totalVotes: 0,
                  options: [
                    {name: "puzzle", count: 0},
                    {name: "strategy", count: 0},
                    {name: "adventure", count: 0},
                    {name: "shooter", count: 0},
                    {name: "sole-playing", count: 0}
                  ]
                  }
  }

  handleClick(){
    const selectedIndex =   this.state.selectedOption
    const newOption = [...this.state.options]

    if (selectedIndex !== null){
      console.log('submitted option', selectedIndex);
      this.setState(prevState => {
        return {totalVotes: prevState.totalVotes + 1}
      })

      
      newOption[selectedIndex].count += 1
      this.setState({
         options: newOption,
       })
     }
   }

  handleOnChange(e, index){
    console.log('selection option', index);
    this.setState({ selectedOption: index});
  }

  render(){
    return (
      <div className="poll">
        {this.props.model.question}
        <PollOption 
          options={this.state.options}
          onChange={(e, index) => this.handleOnChange(e, index)}
          selected={this.state.selectedOption}/>

        <button name="Vote" onClick={() => this.handleClick()}>Vote!</button>
        <VoteCount 
          totalVotes={this.state.totalVotes}
          options={this.state.options}
          />
      </div>
    );
  }
}


export default OpinionPoll;
