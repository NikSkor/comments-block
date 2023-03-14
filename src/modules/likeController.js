export const likeController = (e, store) => {
  e.preventDefault();
  let target = e.target.closest('.comments__like');
  if (!target) return;
  target.firstElementChild.classList.toggle('comments__link_active');
  let id = target.parentElement.id;

  store.map((item) => {
    if (item.id === id) {
      item.isLike = item.isLike === false ? true : false;
    }
  });
};