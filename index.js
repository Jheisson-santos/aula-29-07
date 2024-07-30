const prompt = require('prompt-sync')({sigint: true});
const cadastro = require('./cadastro.js')
while(true){
    console.log(`
          _____________________________________
         |                                     |
         |     Bem Vindo à Biblioteca Node.js  |
         |   1 - Adiciomar usuario             |
         |   2 - Listar usuarios               |
         |   9 -       Sair                    |
         |_____________________________________|
         `);
         
    let inp = +prompt('')
    switch(inp){
        case 1:
        cadastro.addUsuario()
        break;
        case 2:
        cadastro.listar()
        break;
        case 3:
        cadastro.remover()
        break;
        // case 4:
        // segundo.excluir()
        // break;
        case 9:
        process.exit()
        break;
        default:
        console.log('Opção invalida!')
        break;
    }
    }