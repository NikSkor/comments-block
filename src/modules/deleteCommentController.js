export const deleteCommentController = (e, store) => {
  e.preventDefault();

  let target = e.target.closest('.comments__delete');
  if (!target) return;
  let id = target.parentElement.id;
  console.log('id: ', id);

  let index;

  if (store.length === 1) {
    store.length = 0;
    return;
  }

  for (let i = 0; i < store.length; i++) {
    if (store[i].id === id) index = i;
  };

  store.splice(index, 1);  
};