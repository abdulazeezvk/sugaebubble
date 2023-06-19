var Filter = document.getElementById('fps');
var xmark2 = document.getElementById('ccc');
var filter = document.getElementById('filter-by');

filter.addEventListener('click',()=>{
    
    Filter.classList.toggle('hide')
})
xmark2.addEventListener('click',()=>{
    Filter.classList.remove('hide')
})

var down =document.getElementById('cw');
var cake =document.getElementById('do');
var newCake =document.getElementById('hello');
var downNew =document.getElementById('how');


cake.addEventListener('click',()=>{
    
    down.classList.toggle('hides')

    

})

downNew.addEventListener('click',(event)=>{
    
    newCake.classList.toggle('hides')
    event.stopPropagation()
    

})
document.addEventListener('click',()=>{
    if(newCake.classList.contains('hides')){
        newCake.classList.remove('hides')
    }
})