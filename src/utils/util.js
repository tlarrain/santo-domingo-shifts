import moment from 'moment';

const sequences = [
  {
    first: 'Los García',
    second: 'Los Infante',
    third: 'Los Larrain',
  },
  {
    first: 'Los Infante',
    second: 'Los Larrain',
    third: 'Los García',
  },
  {
    first: 'Los Larrain',
    second: 'Los García',
    third: 'Los Infante',
  },
  {
    first: 'Los García',
    second: 'Los Larrain',
    third: 'Los Infante',
  },
  {
    first: 'Los Infante',
    second: 'Los García',
    third: 'Los Larrain',
  },
  {
    first: 'Los Larrain',
    second: 'Los Infante',
    third: 'Los García',
  },
];

function generateDateRanges(year) {
  return [
    {
      iniDate: `${year}-01-04`,
      endDate: `${year}-01-23`,
      comparison: '[]',
    },
    {
      iniDate: `${year}-01-24`,
      endDate: `${year}-02-13`,
      comparison: '[]',
    },
    {
      iniDate: `${year}-02-14`,
      endDate: `${year}-03-01`,
      comparison: '[)',
    },
    {
      iniDate: `${year}-03-01`,
      endDate: `${year}-08-01`,
      comparison: '[]',
    },
    {
      iniDate: `${year}-08-02`,
      endDate: `${year}-10-15`,
      comparison: '[]',
    },
    {
      iniDate: `${year}-10-15`,
      endDate: `${year+1}-01-03`,
      comparison: '[]',
    },
  ]; 
}; 

function yearDateSequence(yearSequence, dateRange) {
  return (yearSequence + dateRange) % 6;
}

function getYearSequence(year) {
  return (year - 2006) % 6;
}

function checkFirstDaysOfYear(date) {
  if (moment(date.format('YYYY-MM-DD')).isBetween(`${date.year()}-01-01`,`${date.year()}-01-03`, 'days', '[]')) {
    return -1;
  }
  return 0;
}
function getDateRange(date) {
  const ranges = generateDateRanges(date.year() + checkFirstDaysOfYear(date));
  let i = 0;
  for (let range of ranges) {
    if (moment(date.format('YYYY-MM-DD')).isBetween(range.iniDate, range.endDate, 'days', range.comparison)) { 
      break;
    }
    i++;
  }
  return i;
}

export function getPrioritySequence(date) {
  const selectedDate = moment(date);
  var yesterday =  moment(date).subtract(1, 'days');
  const tommorrow =  moment(date).add(1, 'days');
  const threeDays = [yesterday, selectedDate, tommorrow];
  let tableData = [];
  for (let day of threeDays) {
    const dateRange = getDateRange(day);
    const yearSequence = getYearSequence(day.year() + checkFirstDaysOfYear(day));
    let finalSequence = Object.assign({}, sequences[yearDateSequence(yearSequence, dateRange)]);
    finalSequence['date'] = day.format('DD-MM-YYYY');
    tableData.push(finalSequence);
  }

  return tableData;
}