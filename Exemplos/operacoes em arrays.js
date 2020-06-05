const arr = [1,2,3,4];

const map = arr.map(function(item,index){
    return item + index;
});

const reduce = arr.reduce(function(total, next){
    return total+next;
});

const find = arr.find(function(item){
    return item === 4;
});

const filter = arr.filter(function(item){
    return item % 2 == 0;
})