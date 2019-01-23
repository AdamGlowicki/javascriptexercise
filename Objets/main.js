const cat = new Object();

cat.name = "Heniek";
cat.age = 2;
cat[`eye colour`] = `red`;
cat.meow = function () {
    console.log("miau, miau");
}


const dog = {
    name: 'Rusiek',
    age: 27,
    'eye colour': 'green',
    barking: ()=> {
        console.log("hou hou");
    },
    //ES6
    squeaking() {
        console.log('aaaa uuu eee');
    }
}

dog.castarated = false;
dog.childrena = ["Jadzia", "Ryszard"];

dog.barking();
dog.squeaking();

//////////////////////////////////////////////////

const result = {
    value: 1,
}

let plus = ()=> {
    result.value++
}

plus();

/////////////////////////////////////

const counte = {
    score: 0,
    increment() {
        this.score++;   
    }
}

