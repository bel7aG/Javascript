//                               manéstèa9héch 5ayba bél 3aarbi    {bad}


const items = document.querySelector('#items');
console.log(items);

                                       // parentNode
console.log(items.parentNode);
console.log(items.parentNode.parentNode);
console.log(items.parentNode.parentNode.parentNode);
console.log(items.parentNode.parentNode.parentNode.parentNode);
                                                                           //==> kifkif
                                       // parentElement
console.log(items.parentElement);
console.log(items.parentElement.parentElement);
console.log(items.parentElement.parentElement.parentElement);
console.log(items.parentElement.parentElement.parentElement.parentElement);

                           //-----------------------------------//

//{bad}                                        //.childNodes 5aaaaaayba  ==>nodeList
console.log(items.childNodes); //l index fihom text té3 linebreak (ki narej3ou lstar) =+> USLESS
console.log(items.firstChild.nodeType === 3) ; //ta3tik #text  3lé 5ater tatina childNode ==>USELESS FLOOOOOOOOP
for (let i = 0; i < items.childNodes.length; i++) {

  if (items.childNodes[i].nodeType === 3) {
    console.log('a');
    if (items.childNodes[i+1] !== null) {
      console.log('a1aaaaaaaaaa');
      items.childNodes[i] = items.childNodes[i+1];
    }
  } else {
    console.log(items.childNodes[i]);
  }
}
console.log(items.childNodes);
//==>#text
                                       //.children
console.log(items.children);
items.children[0].style.letterSpacing = '1rem';

                                          //firstElementChild       HTMLCollection

console.log(items.firstElementChild); // hédhi éli dima nékhdém béha
items.firstElementChild.textContent = 'HELLO 1';
items.firstElementChild.style.color = '#ff0000';


                                       //lastElementChild           HTMLCollection
let upper = 'text-transform: uppercase;';
console.log(items.lastElementChild);
items.lastElementChild.style = upper;
items.lastElementChild.textContent = 'Hello 4';


//{bad}                                    //nextSibling  ==> NodeList

console.log(items.nextSibling);  //#text
//{bad}                                    //previousSibling ==> NodeList
console.log(items.previousSibling); //#text


                                             //nextElementSibling  ==> HTMLCollection
console.log(items.nextElementSibling);

                                             //previousElementSibling ==> HTMLCollection
console.log(items.previousElementSibling);


//createElement
const newDiv = document.createElement('div');
//add class
newDiv.className = 'firstClass';
//add id
newDiv.id = 'firstId';

//add Attribute
newDiv.setAttribute('title', 'Hello div'); //==> 2 parameter

//Create text node
const createText = document.createTextNode('Hello World');

//add Text to div
console.log(newDiv);
newDiv.appendChild(createText)
console.log(newDiv);


const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');
console.log(container);

container.insertBefore(newDiv, h1); //tékhou 2 parametre el lowla chneya bch tinseri e thenya 9ball  chkoun
console.log(container);


console.log('"""""""');
