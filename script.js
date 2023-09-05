const btn = document.querySelector('#btn');
//btn.onclick = function() {alert("hey");};
btn.addEventListener('click', function(e){
    e.target.style.background = 'blue';
});
const buttons = document.querySelectorAll('button');
buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
        alert(btn.id);
    });
});

const divs = document.querySelectorAll('div');

function logText(e){

    console.log(this.classList.value);
}

divs.forEach(function(div){div.addEventListener('click', logText, {capture: true});});

