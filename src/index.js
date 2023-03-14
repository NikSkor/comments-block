import './index.html';
import './index.scss';
import { renderComments } from './modules/renderComments';
import { saveComment } from './modules/saveComment';
import { store } from './modules/store';

renderComments(store);

let form = document.querySelector('.form');
let name = form.name;
let date = form.date;
let comment = form.comment;
let btn = document.querySelector('.form__submit'); 

// name.onchange = (e) => {
//   if(name.value === '') console.log('kuku');
//   console.log(name.value);
// }

// name.oninput = (e) => {
//   console.log(name.value);
// }

// comment.oninput = (e) => {
//   console.log(comment.value);
// };

// date.onchange = (e) => {
//   console.log(date.valueAsNumber);
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(name.value === '' || comment.value === '') return;

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
    let nowHour = (now.getHours() >= 10) ? now.getHours() : '0' + now.getHours().toString();
    let nowMinutes = (now.getMinutes() >= 10) ? now.getMinutes() : '0' + now.getMinutes().toString();
    let nowSeconds = (now.getSeconds() >= 10) ? now.getSeconds() : '0' + now.getSeconds().toString();

    let rightDate = `${oldDate}T${nowHour}:${nowMinutes}:${nowSeconds}`;
    dateOfComment = new Date(rightDate);
  }

  saveComment(userName, userComment, dateOfComment);

  console.log(store);
  renderComments(store);

});


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