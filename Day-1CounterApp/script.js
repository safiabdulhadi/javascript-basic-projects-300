const count = document.querySelector('.count');
const add = document.querySelector('.add');
const restCount = document.querySelector('.reset');
const sub = document.querySelector('.subtract');
let countNumber = 0;

add.addEventListener('click', () =>{
count.innerHTML++;
count.style.color = 'green';
});
sub.addEventListener('click', () =>{
    count.innerHTML--;
    count.style.color = 'red';
});
restCount.addEventListener('click', () =>{
    count.innerHTML = countNumber;
    count.style.color = 'white';

});