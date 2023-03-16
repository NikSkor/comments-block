import './index.html';
import './index.scss';
import { formController } from './modules/formController';
import {store} from './modules/store';


const form = document.querySelector('.form');
const formComments = document.querySelector('.form__comments');


window.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    formController(form, store, formComments);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

    formController(form, store, formComments);
});

