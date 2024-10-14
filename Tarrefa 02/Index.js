const chalk = require ("chalk")
const inquirer = require("inquirer")

inquirer.prompt([
    {
        name: "p1",
        message: "Digite o nome? "
    },
    {
        name: "p2",
        message: "Digite a idade? "
    }

]).then((result) => {
    if(!result.p1 || !result.p2){
      throw new Error (chalk.bgRed("nome e idade são obrigatorio"))
    }
    console.log(chalk.bgYellow.black(`Nome: ${result.p1} \nIdade: ${result.p2}`))  
}).catch((err) => {
    console.log(`Erro: ${err}`)
});