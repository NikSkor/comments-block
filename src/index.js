import './index.html';
import './index.scss';
import { formController } from './modules/formController';
import {renderComments} from './modules/renderComments';
import {saveComment} from './modules/saveComment';
import {store} from './modules/store';
import {validateForm} from './modules/validateForm';

const form = document.querySelector('.form');
const formComments = document.querySelector('.form__comments');
const btn = document.querySelector('.form__submit');


window.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    formController(form, store, formComments);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

    formController(form, store, formComments);
});

