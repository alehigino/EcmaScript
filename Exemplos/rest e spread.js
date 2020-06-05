//rest

const usuario = {
    nome: 'ale',
    idade: 25
};

const {nome, ...resto} = usuario;

const arr = [1,2,3,4];

const [a,b,...c] = arr;

function soma(a, b, ...params){
    return a+b+params;
}

soma(1,2,3,4,5,6);

//spread


const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

const usuario1 = { ...usuario, nome:'joao'}