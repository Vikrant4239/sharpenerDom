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

// let nam = document.querySelector('.list-group-item:nth-child(3)');
 //nam.style.backgroundColor="green";


 //let nama = document.querySelector('.list-group-item:nth-child(2)');

 //nama.remove();
 

// let sam = document.querySelector('.btn');
 //sam.style.backgroundColor="green";
 //sam.value='jao';

 //let sama = document.querySelectorAll('.list-group-item');
 //for(let i =0;i<sama.length;i++){
   // if(i==1){
        //sama[i].style.backgroundColor='red';
   // }
   
        
    
 //}

 let odd = document.querySelectorAll('li:nth-child(odd)');
 for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
 }


 