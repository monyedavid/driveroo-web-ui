import moment from 'moment';

export const dateDisplayFormatter = (mongodate, withTime) => {
  const stage1 = mongodate.split('T');
  const timeFrame = stage1[1].split('.');
  if (withTime) {
    return `${stage1[0]} ${timeFrame[0]}`;
  }

  return `${stage1[0]}`;
};

export const dateFormatter = () => {
  const todaysDate = moment().format(),
    max = dateDisplayFormatter(todaysDate, false),
    minStage1 = max.split('-');

  let day = minStage1[2] - 1;
  day = day.length == 2 ? day : `0${day}`;
  const min = `${minStage1[0]}-${minStage1[1]}-${day}`;

  return {
    min, // should be in the last 24 hrs
    max,
  };
};

export const monthGeneratorFormatter = () => {
  const todaysDate = moment().format(),
    max = dateDisplayFormatter(todaysDate, false),
    maxMontStage1 = max.split('-');
  const maxmonth = `${maxMontStage1[0]}-${maxMontStage1[1]}`;
  // let minmonth = maxMontStage1[1] - 1;
  // minmonth = minmonth.length == 2 ? minmonth : `0${minmonth}`;

  return {
    min: maxmonth, // should be in the last 24 hrs
    max: maxmonth,
  };
};

export const getMonthname = () => {
  const currMonthName = moment().format('MMMM');
  const prevMonthName = moment()
    .subtract(1, 'month')
    .format('MMMM');
};

// FOR GIFTTICKETS USE ONLY AS OFF SUN MAY 5 20191 7:45PM
export const mongodateFormatter = (date, time) => {
  // Fri May 10 2019
  return `${date.toISOString().split('T')[0]}T${time}.000Z`;
};
