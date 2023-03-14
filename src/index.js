import './index.html';
import './index.scss';
import { renderComments } from './modules/renderComments';
import { saveComment } from './modules/saveComment';
import { store } from './modules/store';
import { validateForm } from './modules/validateForm';

console.log(store);

let form = document.querySelector('.form');
const formComments = document.querySelector('.form__comments');

let name = form.name;
// console.log('name: ', name);
let date = form.date;
let comment = form.comment;
// console.log('comment: ', comment);
let btn = document.querySelector('.form__submit'); 


form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateForm(name);
  validateForm(comment);

  if (name.value === '' || comment.value === '') {
    
    name.addEventListener('input', () => {
      // console.log('lulu');
      validateForm(name);
    });

    comment.addEventListener('input', ()=> {
      // console.log('zuzu');
      validateForm(comment);
    });
    return;
  }

  // if (comment.value === '') {
  //   comment.addEventListener('input', ()=> {
  //     console.log('zuzu');
  //     validateForm(comment);
  //   });
  //   return;
  // }

  let userName = name.value;
  let userComment = comment.value;
  let dateOfComment;

  if (isNaN(date.valueAsNumber)) {
    dateOfComment = new Date();
  } else {
    let oldDate = date.value;
    console.log('oldDate: ', oldDate);
    let now = new Date();
    // console.log('now: ', now.getMinutes().length);
    let nowHour =
      now.getHours() >= 10 ? now.getHours() : '0' + now.getHours().toString();
    let nowMinutes =
      now.getMinutes() >= 10
        ? now.getMinutes()
        : '0' + now.getMinutes().toString();
    let nowSeconds =
      now.getSeconds() >= 10
        ? now.getSeconds()
        : '0' + now.getSeconds().toString();

    let rightDate = `${oldDate}T${nowHour}:${nowMinutes}:${nowSeconds}`;
    dateOfComment = new Date(rightDate);
  }

  saveComment(userName, userComment, dateOfComment);

  // console.log(store);
  renderComments(store, formComments);

  form.reset();
});

// renderComments(store, formComments);

// const formatDate = (date) => {
//   const options = {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//   };
//   return new Intl.DateTimeFormat('ru', options).format(new Date(date));
// };