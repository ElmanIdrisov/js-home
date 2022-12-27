/* const list = document.querySelector('.list');
const listItems = list.querySelectorAll('div');
 */
/* const person = {
    name: 'Elman',
    job: 'proger',
    age: 18,
    hobby: 'football'
}

for (index of Object.keys (person)) {
    console.log(person[index]);
} */

/* for(index in listItems) {
    if (listItems[index].className ==='active') {
        listItems[index].style.backgroundColor = 'green';

        break;
    }
} */

/* const wrapper = document.querySelector('.wrapper');

const element = document.createElement('div');

element.classList.add('square');

wrapper.appendChild(element);
element.style.width = '100px';
element.style.height = '100px';
element.style.backgroundColor = 'blue';
element.style.borderRadius = '15px';
element.style.marginLeft = '100px'; */
/* wrapper.appendChild(document.createElement('div')).classList.add('.box');

const box = document.querySelector('.box'); */

/* const box = document.querySelector('.box');
const parent = box.parentNode;

console.log('parent', parent); */

const ImageStyles = {
    width: '100px',
    borderRadius: '5px',
    transition: '.3s'
}

const newImageElement = document.createElement('img');
Object.assign(newImageElement.style, ImageStyles)
newImageElement.setAttribute('src', 'https://images.pexels.com/photos/9493793/pexels-photo-9493793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' );

const body = document.querySelector('body');
 body.appendChild(newImageElement, body.firstChild); 
 const image = document.querySelector('img');

 setTimeout(() => {
    image.style.transform = 'translateX(100px) rotate(90deg)';
    newImageElement
 }, 1000)

 setTimeout(() => {
    image.remove();
 },2000)