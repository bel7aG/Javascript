const mainButton = document.querySelector('input[type = button]');

mainButton.addEventListener('click', () => {
const animateBox = document.querySelector('.animate');

let pos = 0;

let id  = setInterval( function() {
      if (pos == Math.floor(391.25)) {
         clearInterval(id);
      } else {
         pos++;
         animateBox.style.top = pos + 'px';
         animateBox.style.left = pos + 'px';
      }
   }
   , 10);

   animateBox.addEventListener('mouseover', () => {

      animateBox.innerHTML = '<h1>shiiiiiiiit NOOOOOOO</h1>';
      const hOne = document.animateBox.firstElementChild;
      const text = document.getElementById('text');
      text.id = 'text';

      text.style.textAlign = 'center';
      text.style.fontSize = '30px';
      text.style.color = 'white';
      animateBox.style.padding = '210px';

   });

});




























// const colorInput = document.querySelector('input[type=color]');
// const colorButton = document.querySelector('button');
// const colorVariable = '--yellow';
//
// colorButton.addEventListener('click', () =>
//    document.documentElement.style.setProperty(colorVariable, 'rgb(79, 40, 70)')
// );
//
// let change = true;
// setInterval( () => {
//    if (change){
//       document.documentElement.style.setProperty(colorVariable, 'red');
//       change = !(change);
//    } else {
//       document.documentElement.style.setProperty(colorVariable, 'yellow');
//       change = !(change);
//    }
// }
// ,2000);
