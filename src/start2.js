/* const chalk = require('chalk');
recursive()
var question = [
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
}]

inquirer
  .prompt(question)
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log('Minimum distance to original place :')
    console.log(distance(answers['name']))

  })
  .catch(error => {
    console.log(error)
  }); */