import {createComment} from "./createComment";
import {deleteCommentController} from "./deleteCommentController";
import {likeController} from "./likeController";
import {createElement} from "./utils/createElement";


export const renderComments = (store, parent) => {
  parent.innerHTML = '';

  if (store.length === 0) {
    createElement('p', {
      className: 'comments__title',
      textContent: 'Комментариев пока нет',
    }, {
      parent: parent,
    });
  }
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
};


