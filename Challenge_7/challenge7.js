//magic eightball

var numberofreplys = 100;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'
    if(choice%2 == 0){
    console.log("The random number "+choice+" is an even number.");
}

else if(choice%2 == 1){
    console.log("The random number "+choice+" is an odd number.");
}
    
}

ask();
