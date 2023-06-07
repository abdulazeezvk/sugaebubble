var Filter = document.getElementById('fps');
var xmark2 = document.getElementById('ccc');
var filter = document.getElementById('filter-by');

filter.addEventListener('click',()=>{
    
    Filter.classList.toggle('hide')
})
xmark2.addEventListener('click',()=>{
    Filter.classList.remove('hide')
})

