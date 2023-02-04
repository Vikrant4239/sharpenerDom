//console.log(document.getElementById('heading'));
//let manipulating = document.getElementById('heading');
//manipulating.textContent='Hello';
//manipulating.style.border='2px solid black';
//manipulating.style.backgroundColor='grey';

/*let man = document.getElementsByClassName('list-group-item');

for(let i=0;i<man.length;i++){
    man[i].style.backgroundColor="grey";
}*/

let man = document.getElementsByTagName('li');

for(let i=0;i<man.length;i++){
 man[i].style.backgroundColor="grey";
}

let nam = document.querySelector('li');
 nam.style.background="yellow";

 let sam = document.querySelector('.btn');
 sam.style.backgroundColor="green";
 sam.value='jao';