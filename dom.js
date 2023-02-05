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

 //let odd = document.querySelectorAll('li:nth-child(odd)');
 //for(let i=0;i<odd.length;i++){
  //  odd[i].style.backgroundColor='green';
 //}

 let itemList = document.querySelector('#items');
 //parent Node
 console.log(itemList.parentNode);
 itemList.parentNode.style.backgroundColor='purple';
 //child node
 console.log(itemList.children);
 //specific child
 itemList.children[2].style.backgroundColor='green';
 //firstElementchild
 itemList.firstElementChild.style.backgroundColor='yellow';
 //lastElementchild
 itemList.lastElementChild.style.backgroundColor='orange';
 //next Sibling
 console.log(itemList.nextElementSibling);
 //previous sibling 
 console.log(itemList.previousElementSibling);
 //creating element
 let newDiv = document.createElement('div');
 newDiv.className='hello';
 newDiv.id='hello1';
 let newDivtext=document.createTextNode('HEllo');
 newDiv.appendChild(newDivtext);
 //adding them to ui
 let container = document.querySelector('.container');
 let h1 = document.querySelector('.list-group-items');
 container.insertBefore(newDiv,h1);



 