import './index.html';
import './index.scss';
import '@babel/polyfill';

import {mult, sayHi} from './modules/calc';
import picture from './assets/images/logo.png';

const pictureWrap = document.querySelector('.pictureWrap');
const img = new Image();
img.src = picture;
img.width = 50;
pictureWrap.append(img);

let sum = 2 + 4;

console.log('sum = ', sum);
console.log(mult(4 ,7)); 
sayHi('Ivan');