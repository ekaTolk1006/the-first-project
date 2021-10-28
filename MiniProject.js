const modal = document.querySelector('.fixed-overlay'),
opnBtn = document.querySelector('.opnBtn'),
clsBtn = document.querySelector('.btn');
let html = document.documentElement;
let body = document.body;

opnBtn.addEventListener('click', ()=>{
    modal.classList.add('opnMod');
    modal.classList.remove('clsMod');
});

clsBtn.addEventListener('click', ()=>{
    modal.classList.add('clsMod');
    modal.classList.remove('opnMod');
});
