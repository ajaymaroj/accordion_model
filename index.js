'use strict';

// const one =document.querySelector('.one');
// document.querySelector('.btn-one').addEventListener('click', function(){
//     one.classList.toggle('hidden')
// })

// const two= document.querySelector('.two');
// document.querySelector('.btn-two').addEventListener('click', function(){
//     two.classList.toggle('hidden')
// })

// const three =document.querySelector('.three');
// document.querySelector('.btn-three').addEventListener('click', function(){
//     three.classList.toggle('hidden')
// })

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

const btnsOpenModal = document.querySelectorAll('.show-modal');
const all = [one, two, three]


for (let i =0 ; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',function(){
        all[i].classList.toggle('hidden');
    })
}