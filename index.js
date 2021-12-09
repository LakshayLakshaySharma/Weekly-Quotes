let date = new Date();
let weekdays = date.getDay();
let weekDayName;
let getQuotes;

switch (weekdays) {
  case 0:
    weekDayName = "SUNDAY";
    getQuotes =
      '"Society is always taken by surprise at any new example of common sense."';
    break;

  case 1:
    weekDayName = "MONDAY";
    getQuotes =
      '"Care about what other people think and you will always be their prisoner."';
    break;

  case 2:
    weekDayName = "TUESDAY";
    getQuotes =
      '"Never argue with stupid people, they will drag you down to their level and then beat you with experience."';
    break;

  case 3:
    weekDayName = "WEDNESDAY";
    getQuotes = '"To plant a garden is to believe in tomorrow."';
    break;

  case 4:
    weekDayName = "THRUSDAY";
    getQuotes =
      '"Give more than you think you can, trusting that you are richer than you think."';
    break;

  case 5:
    weekDayName = "FRIDAY";
    getQuotes = '"Dont be afraid of failure be afraid of petty success."';
    break;

  case 6:
    weekDayName = "SATURDAY";
    getQuotes =
      '"Definition of Statistics: The science of producing unreliable facts from reliable figures."';
    break;
}

let weekdayDiv = document.getElementById("weekday");
weekdayDiv.innerHTML = `${weekDayName}`;

let quotesDiv = document.getElementById("quotes");
quotesDiv.innerHTML = `${getQuotes}`;
