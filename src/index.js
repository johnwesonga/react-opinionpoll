import React from 'react';
import {render} from 'react-dom';
import './index.css';
import OpinionPoll from './App';


var json = {
        question: 'Which type of video game do you play most often?',
        choices:
        [
           {text: "Puzzle", value: "puzzle"},
           {text: "Strategy", value: "strategy"}, 
           {text: "Adventure", value: "adventure"},
           {text: "Shooter", value: "shooter"},
           {text: "Role-playing", value: "role-playing"}   
        ]
    }
const root = document.getElementById("root");
render(<OpinionPoll model ={json} />, root)

