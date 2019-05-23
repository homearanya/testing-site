const dateDiffInDays = (date1, date2) => {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24)
  );
};

export const articleUpdateTime = (time) => {
  if (!time) {
    return;
  }

  // ==== DO JOB
  /* eslint-disable */
  time = time.replace(/\.\d+/, ''); // remove milliseconds
  time = time.replace(/-/, '/').replace(/-/, '/');
  time = time.replace(/T/, ' ').replace(/Z/, ' UTC');
  time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2'); // -04:00 -> -0400
  time = new Date(time * 1000 || time);

  const now = new Date();
  const datesDiff = dateDiffInDays(time, now);
  if (datesDiff <= 7) {
    return 'Updated this week';
  }
  if (datesDiff <= 30) {
    return 'Updated over a week ago';
  }
  return 'Updated over a month ago';
};

export default articleUpdateTime;
