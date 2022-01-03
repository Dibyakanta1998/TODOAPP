import { useEffect, useState } from "react";
import moment from "moment";

const Calendar = () => {
  const calendarDates = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6,
  };
  const calendarMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [startDay, setStartDay] = useState(0);
  const [SelectedMonth, setSelectedMonth] = useState("");
  const [SelectedYear, setSelectedYear] = useState("");

  const [NoofDay, setNumberofDay] = useState(0);

  useEffect(() => {
    var d = new Date();

    let monthIndex = d.getMonth(); //0-11
    let year = d.getFullYear();
    setSelectedYear(year);
    setSelectedMonth(monthIndex);
    let startDayInMonthData = new Date(`${year}-${monthIndex + 1}-01`).getDay(); //1-7
    setStartDay(startDayInMonthData);
    setNumberofDay(new Date(year, monthIndex + 1, 0).getDate()); //1-31,30,28,29
  }, []);

  const getIndexDec = () => {
    if (SelectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(SelectedYear - 1);
    } else setSelectedMonth(SelectedMonth - 1);
  };

  const getIndexIncr = () => {
    if (SelectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(SelectedYear + 1);
    } else setSelectedMonth(SelectedMonth + 1);
  };

  useEffect(() => {
    let startDayInMonthData = new Date(
      `${SelectedYear}-${SelectedMonth + 1}-01`
    ).getDay(); //1-12
    setStartDay(startDayInMonthData);
    setNumberofDay(new Date(SelectedYear, SelectedMonth + 1, 0).getDate()); //1-12
  }, [SelectedMonth, SelectedYear]);

  return (
    <>
      <h1>This is your Calendar</h1>
      <div id="mainContainer">
        <div className="container">
          <div className="heading">
            <button className="prev" onClick={getIndexDec}>
              &lt;
            </button>
            <span className="month">{calendarMonths[SelectedMonth]}</span>
            <span className="year">{SelectedYear}</span>
            <button className="next" onClick={getIndexIncr}>
              &gt;
            </button>
          </div>
          <div className="weekdays">
            <span className="nameOfDay">Sun</span>
            <span className="nameOfDay">Mon</span>
            <span className="nameOfDay">Tue</span>
            <span className="nameOfDay">Wed</span>
            <span className="nameOfDay">Thu</span>
            <span className="nameOfDay">Fri</span>
            <span className="nameOfDay">Sat</span>
          </div>
          <div className="dates">
            {[...Array(startDay)].map((item, key) => (
              <span className="particularDate"></span>
            ))}

            {[...Array(NoofDay)].map((item, index) => {
              let newDate = new Date().getUTCDate();
              let newMonth = new Date().getUTCMonth();
              let newYear = new Date().getFullYear();
              console.log(newDate);
              let newStyle = {};
              if (
                index + 1 === newDate &&
                newMonth == SelectedMonth &&
                newYear == SelectedYear
              ) {
                newStyle = {
                  backgroundColor: "#fff",
                  borderRadius: 20,
                };
              }
              return (
                <span className="particularDate" style={newStyle}>
                  {index + 1}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Calendar;
