const formComments = document.querySelector('.form__comments');

export const renderComments = (store) => {
  if (store.length === 0) return;

  formComments.innerHTML = '';
};