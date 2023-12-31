
const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close');

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

//Open modal

function openModal(e){
    e.preventDefault();
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}