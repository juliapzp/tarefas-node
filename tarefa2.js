const inquirer = require('inquirer');
const chalk = require('chalk');

const perguntas = [
  {
    type: 'input',
    name: 'nome',
    message: 'Qual é o seu nome?'
  },
  {
    type: 'input',
    name: 'idade',
    message: 'Qual é a sua idade?',
    validate: function(value) {
      const idade = parseInt(value);
      if (isNaN(idade)) {
        return 'Por favor, insira um número válido para a idade.';
      }
      return true;
    }
  }
];

inquirer.prompt(perguntas)
  .then((respostas) => {
    const mensagem = `Nome: ${respostas.nome}, Idade: ${respostas.idade}`;
    console.log(chalk.black.bgYellow(mensagem));
  })
  .catch((erro) => {
    console.error('Ocorreu um erro:', erro);
  });
