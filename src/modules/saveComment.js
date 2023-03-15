import {store} from "./store";
import {assignId} from './utils/generateRandomId';

export const saveComment = (name, text, date) => {
  let commentObj = {
    name: name,
    text: text,
    date: date,
    isLike: false,
  } 

  commentObj = assignId(commentObj);

  store.push(commentObj);
};