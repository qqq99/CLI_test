#!/usr/bin/env node
require('./robot2.js');

const inquirer = require('inquirer');

var questions = [
  {
    type: "confirm",
    name: "ask",
    message: "Want to play? (hit enter for YES, other random key for NO)",
    default: true
},
  {
      name:"name",
      type:"input",
      message:"please give robot an instruction: e.g.'F1,R1,B2,L1,B3' and separate using comma",
      validate(val){
          if(val === ''){
              return 'insruction cannot be blank'
          }else{
              return true
          }
      }
}];

function recursive(){
  inquirer
  .prompt(questions)
  .then(answers => {
    // 
    console.log('Minimum distance to original place :')
    console.log(distance(answers['name']))

    if(answers.ask)
      recursive();
    else
      console.log('**************End*************')
  }).catch(error => {
    console.log(error)
  })
}

recursive();