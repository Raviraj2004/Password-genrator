let h1 = document.querySelector("h1");
let button = document.querySelector("button");






function pass(length){

    let element = "abcdefghijklmnopqrstuvwxyz1234567890@$%&";
    let password = '';

for(let i=1 ; i<=length ; i++){
     password = password + element[Math.floor(Math.random() * element.length)]
    
}
return password;
}

button.addEventListener('click' ,()=>{
    h1.innerText = pass(6)
})
