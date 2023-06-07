var test = document.getElementById('open');
var hello = document.getElementById('mu');


hello.addEventListener('click',()=>{
    
    test.classList.toggle('close')
})

var testm2 = document.getElementById('bars2');
var hellom2 = document.getElementById('bs2');

hellom2.addEventListener('click',()=>{
    
    testm2.classList.toggle('hide')
})

var Menu2 = document.getElementById('bars2');
var xmark2 = document.getElementById('ooo');

xmark2.addEventListener('click',()=>{
    
    Menu2.classList.toggle('hide')
})