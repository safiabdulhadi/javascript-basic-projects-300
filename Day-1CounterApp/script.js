const count = document.querySelector('.count');
// const add = document.querySelector('.add');
// const restCount = document.querySelector('.reset');
// const sub = document.querySelector('.subtract');

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) =>{
if(e.target.classList.contains('add')){
// console.log('ADD');
count.innerHTML++;
// count.style.color = 'green';
setColor();
}
if(e.target.classList.contains('subtract')){
    count.innerHTML--;
    // count.style.color = 'red';
    setColor();
}
if(e.target.classList.contains('reset')){
    count.innerHTML = 0;
    count.style.color = 'white';
    setColor();
}
});


function setColor(){
    if(count.innerHTML > 0){
        count.style.color = 'green';
    }else if(count.innerHTML < 0){
        count.style.color = 'red';
    }else{
        color.style.color = 'white';
    }
}


/*

This is One way

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

*/