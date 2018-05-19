const mainButton = document.querySelector('.list-group').nextElementSibling;
const firstTextInput = document.querySelector('.form-control');
const children = document.querySelector('.list-group').children;
const firstChild = document.querySelector('.list-group').firstElementChild;
const p = document.getElementsByClassName('btn')[0];

let i = 0;
firstTextInput.addEventListener('keydown', () => {

   firstChild.innerHTML = firstTextInput.value;
});


document.documentElement.addEventListener('click', (event) => {
   let color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;

   let backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`


   event.target.style.color = color;
   event.target.style.backgroundColor = backgroundColor;

   console.log(event.target);
});

const headerTitle = document.getElementById('header-title');
p.addEventListener('click', () => {
   headerTitle.innerHTML = '<h1>' + firstTextInput.value + '</h1>';
   if (firstTextInput.value.length === 0) {
      headerTitle.innerHTML = `<h1>Item Lister</h1>`;
   }
});



const movement = document.querySelector('.mousemove > h5');
document.addEventListener('mousemove', (e) => {
   movement.innerHTML =
   `<h5 style="display: flex; >
      <div style="margin-left: 2rem;">
         clientX = ${e.clientX}<br> clientY = ${e.clientY}<br><br>
      </div>
      <div style="margin-left: 2rem; flex: 1; color: white">
      offsetX = ${e.offsetX}<br> offsetY = ${e.offsetY}
      </div>
   </h5>`
});


document.write(`<div><h1>Hello</h1></div>`);
