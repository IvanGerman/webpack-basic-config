import './index.html';
import './index.scss';
import '@babel/polyfill';
import {mult, sayHi} from './modules/calc';

let sum = 2 + 4;

console.log('sum = ', sum);
console.log(mult(4 ,7)); 
sayHi('Ivan');