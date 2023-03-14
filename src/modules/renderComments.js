import { createComment } from "./createComment";
import { deleteCommentController } from "./deleteCommentController";
import { likeController } from "./likeController";
import { createElement } from "./utils/createElement";


export const renderComments = (store, parent) => {
  // if (store.length === 0) return;

  // console.log(store);

  let text = parent.innerHTML;

  parent.innerHTML = '';

  let ul = createElement(
    'ul',
    {
      className: 'comments__list',
    },
    {
      parent: parent,
    }
  );

  store.map((item) => {
    ul.prepend(createComment(item));
  });

  ul.addEventListener('click', (e) => {
    if (e.target.closest('.comments__like')) likeController(e, store);
    if (e.target.closest('.comments__delete')) {
      deleteCommentController(e, store);
      renderComments(store, parent);
    } 
  });

  console.log(store);

  if (parent.innerHTML === '') {
    parent.innerHTML = text;
  }
};


