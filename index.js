openBtn = document.getElementById('open-btn');
closeBtn= document.getElementById('close-btn');
modalContainer = document.getElementById('modalContainer');

openBtn.addEventListener('click', function(){
    modalContainer.style.display ='block';
})
closeBtn.addEventListener('click', function(){
    modalContainer.style.display ='none';
})

window.addEventListener('click' , function(e){
    if(e.target===modalContainer){
        modalContainer.style.display='none'
    }
})