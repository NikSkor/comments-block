export const formatDate = (date) => {
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  let yesterday = new Date(new Date() - 24 * 3600 * 1000);
  yesterday.setHours(0, 0, 0, 0);

  if (date >= today.getTime()) {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
    };

    let commentDate = new Intl.DateTimeFormat('ru', options).format(
      new Date(date)
    );

    return `Cегодня, ${commentDate}`;
  }

  if (date >= yesterday.getTime() && date < today.getTime()) {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
    };

    let commentDate = new Intl.DateTimeFormat('ru', options).format(
      new Date(date)
    );

    return `Вчера, ${commentDate}`;
  }

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Intl.DateTimeFormat('ru', options).format(new Date(date));
};
