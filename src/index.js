import React from 'react';
import {render} from 'react-dom';
import './index.css';
import OpinionPoll from './App';


var json = {
        question: 'Do you support cookies in cakes?',
        choices:
        [
           {text: "Yes", value: "yes"},
           {text: "No", value: "no"} 
        ]
    }
const root = document.getElementById("root");
render(<OpinionPoll model ={json} />, root)

