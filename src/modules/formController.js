import { renderComments } from "./renderComments";
import { saveComment } from "./saveComment";
import { validateForm } from "./validateForm";

export const formController = (form, store, formComments) => {
  const name = form.name;
  const date = form.date;
  const comment = form.comment;

  validateForm(name);
  validateForm(comment);

  if (name.value === '' || comment.value === '') {
    name.addEventListener('input', () => {
      validateForm(name);
    });

    comment.addEventListener('input', () => {
      validateForm(comment);
    });
    return;
  }

  let userName = name.value;
  let userComment = comment.value;
  let dateOfComment;

  if (isNaN(date.valueAsNumber)) {
    dateOfComment = new Date().getTime();
  } else {
    let oldDate = date.value;
    let now = new Date();

    if (new Date(oldDate).getTime() >= now.getTime()) {
      dateOfComment = now.getTime();
    } else {
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
      dateOfComment = new Date(rightDate).getTime();
    }
  }

  saveComment(userName, userComment, dateOfComment);

  renderComments(store, formComments);

  form.reset();
};