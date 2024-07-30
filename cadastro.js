const prompt = require('prompt-sync')({sigint: true});

let usuarios = []
let numeroId = 0
let contador = ()=>{
    numeroId++
    return 
}
let addUsuario = ()=>{
    let nome = prompt('Digite seu nome: ')
    let email = prompt('Digite seu email: ')
    let phone = prompt('Digite seu telefone(s) ou fixo com DDD: ')
   
let cort = email.split('')
let com = ['@', '.', 'c', 'o', 'm']
let posicaoCOM = 4
for(let i = cort.length; i >= 0; i--){
    if(cort[i] == com[posicaoCOM]){
        posicaoCOM--
    }
}

    if( !isNaN(phone) && (phone.length == 11 || phone.length == 10) && posicaoCOM == -1 &&nome != ''){
        let mtpTelefone = ()=>{
            let opc = prompt('Deseja adicionar mais um telefone?(s/n): ')
            if(opc =='s'){
                if(phone.length == 11 || phone.length == 10){
                let newPhone = prompt('Digite o telefone: ')
                telefone.push(newPhone)
                mtpTelefone()
            } else {console.log('Numero invalido')
                mtpTelefone()
            ;}
            }else if(opc == 'n'){
                return
            } else {console.log("Telefone invalido")
        mtpTelefone();}}
        let telefone = []
        telefone.push(phone)
        mtpTelefone()
        contador()
        usuarios.push({numeroId, nome, email, telefone})
        console.log(usuarios);

    }else{console.log('dados invalidos');
        addUsuario()
    }
}
module.exports.addUsuario = addUsuario
let listar = ()=>{
    usuarios.forEach((element,index) =>{
        console.log(`Usuario: ${index + 1} \nNome: ${element.nome} \nEmail: ${element.email}`);
        element.telefone.forEach(element => {
            console.log(`Celular ou Fixo: ${element}`);
        });
    })
}
module.exports.listar = listar
let remover = ()=>{
    listar()
    let tirar = prompt('Qual usuario deseja remover')
    usuarios.splice(tirar-1)
}
module.exports.remover =remover