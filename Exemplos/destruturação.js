const usuario = {
    nome: 'ale',
    idade: 25,
    endereco: {
        rua: 'santa terezinha'
    }
};

const { nome, endereco: {rua}} = usuario;

function mostraNome({nome}){
    console.log(nome);
}

mostraNome(usuario);