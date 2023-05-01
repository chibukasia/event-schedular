import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(advancedFormat);
dayjs.extend(weekday)
export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [isDay, setIsDay] = useState(false);
  const [isWeek, setIsWeek] = useState(true);
  const [isMonth, setIsMonth] = useState(false);
  const [prevWeek, setPrevWeek] = useState(dayjs().weekday(0));
  const [nextWeek, setNextWeek] = useState(dayjs().weekday(6));

  const prevClick = () => {
    if (isDay) {
      const prev = dayjs(date).subtract(1, "day");
      setDate(new Date(prev.format("MM/DD/YYYY")));
    } else if (isWeek) {
      const prev = dayjs(date).subtract(1, "week");
      setDate(new Date(prev.format("MM/DD/YYYY")));
    } else if (isMonth) {
      const prev = dayjs(date).subtract(1, "month");
      setDate(new Date(prev.format("MM/DD/YYYY")));
    }
  };

  useEffect(()=>{
    setPrevWeek(dayjs(date).weekday(0))
    setNextWeek(dayjs(date).weekday(7))
  },[date])
  const nextClick = () => {
    if (isDay) {
      const next = dayjs(date).add(1, "day");
      setDate(new Date(next.format("MM/DD/YYYY")));
    } else if (isWeek) {
      const next = dayjs(date).add(1, "week");
      setDate(new Date(next.format("MM/DD/YYYY")));
    } else if (isMonth) {
      const next = dayjs(date).add(1, "month");
      setDate(new Date(next.format("MM/DD/YYYY")));
    }
  };

  return (
    <div>
      <div className="flex">
        <button
          className="bg-green-200 px-3 text-lg rounded-lg"
          onClick={prevClick}
        >
          Prev
        </button>

        {isDay ? (
          <div className="text-lg">
            <p>
              {" "}
              <b>{dayjs(date).format("MMMM")}</b> {dayjs(date).format("Do")}
            </p>
          </div>
        ) : isWeek ? (
          <div className="text-lg">
            <p>
              <b>
                {dayjs(date).format("MMM")} {prevWeek.format("Do")} -{" "}
                {dayjs(date).format("MMM")} {nextWeek.format("Do")}
              </b>{" "}
            </p>
          </div>
        ) : isMonth ? (
          <div className="text-lg">
            <p>
              <b>{dayjs(date).format("MMMM")}</b> {dayjs(date).format("YYYY")}
            </p>
          </div>
        ) : null}
        <button
          className="bg-green-200 px-3 text-lg rounded-lg"
          onClick={nextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}
