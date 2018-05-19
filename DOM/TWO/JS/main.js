console.log(typeof(document));
document.title = `BelhassenDOM`;

//add Paragraph
const myP = document.createElement('p');
const addText = document.createTextNode('This is my creater paragraph in javascript');

myP.appendChild(addText);
document.body.appendChild(myP);
console.log(document.all);

//selector

                                 //getElementById//
const mainHeader = document.getElementById('main-header');
const createH4 = document.createElement('h4');
const h4Text = document.createTextNode('this is my Alone Try to undrestand this appendChild and createTextNode and createElement Of cours');
console.log(h4Text);
const appendInH4 = createH4.appendChild(h4Text);
appendInHeader = mainHeader.appendChild(appendInH4);


const headerTitle = document.getElementById('header-title');

console.log(headerTitle.textContent); //hata e span eli maoujouda fel h1 eli feha display: none yafficheha
console.log(headerTitle.innerText); //hédhi taffichilek ken eli yetaficha 3al screen e span eli mahtouta fel h1 ou display: none té3ha matétafichéch

mainHeader.style.borderBottom = "2px solid #33b5e5";

mainHeader.innerHTML += '<h3>Hello World</h3>'; //innerHTML t7otlék él balise éli hatitha
//    fi wosét é sélécteur adhéka ou ki tamél  .innerHTML += '<h3></h3>'==> thotlek h3
//    m3a lhajét éli maoujoudin
// ou él   (=)  barka tfasakh él élment éli maoujoudin f selecteur ou tbadelhoulék béli hatitou


                                 //getElementsByClassName//

const items = document.getElementsByClassName('list-group-item');

console.log(items); //kol wahda andha l index té3ha like an Array
   let k = 0;
for (item of items) {
   k++;
   if( !(k % 2) ) {
      item.style.color = 'red';
      item.style.boxShadow  = '0 1rem 3rem #212121';
      item.style.textShadow = "51px 1px 1px black";
   } else {
      item.style = 'background-color: #212121; color: #FF8800';
      item.style.textShadow = "91px 1px 4px white";
      item.style.fontWeight = 'bold';
      item.style.fontFamily = 'BatmanForeverAlternate';
   }

}

                                 //querySelector//

const input = document.querySelector('input[type="text"]');
input.disabled = 1; //desactiver 1 true
input.disabled = 0; //activer disabled === 0 false
input.disabled = 1;//raja3ha desactiver
input.placeholder = 'Not ready';
input.style.textShadow = '2px 1px 5px #ff0000';

const submit = document.querySelector('button[type="button"]');
submit.addEventListener('click', () => {
   submit.style.backgroundColor = 'red';
   submit.style.color = 'blue';
});

                                       //querySelectorAll//

const odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
const even = document.querySelectorAll('.list-group-item:nth-child(even)');
for (let i = 0; i < odd.length; i++) {
   odd[i].style.border = '30px solid red';
   even[i].style.border = "20px dashed yellow";
}






//
// console.log(window);
// console.log(document);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
//
// console.log(document.all[7]);
// //document.all[7].textContent = "Hani Badalték ahahaha"; tbadeli l lktiba té3 l header
// console.log(document.forms);
// console.log(document.links); //ma3anéch hata link
