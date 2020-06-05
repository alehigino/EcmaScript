class todoList{
    constructor(){
        this.todos = [];
    }

    addtodo(){
        this.todos.push('novotodo');
    }
}

class list{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
    }

}
class todoList extends list{
    constructor(){
        super();

        this.usuario = 'ale'
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const minhaList = new todoList();

class matematica{
    static soma(a,b){
        return a + b;
    }
}

console.log(matematica.soma(1,2));
