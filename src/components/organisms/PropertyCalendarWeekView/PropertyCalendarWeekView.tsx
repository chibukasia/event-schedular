import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import PropertyCalendarWeekViewCard, {
  IProperty,
} from "@/components/calendar/Property CalendarWeekViewCard/PropertyCalendarWeekViewCard";
import {
  endOfISOWeek,
  startOfISOWeek,
  eachDayOfInterval,
  format,
  parse,
  differenceInDays,
  isSameDay,
  parseISO,
} from "date-fns";
/*
CHECK ON EACH DAY PROPERTIES
CHECCK ON EVENTS
CHECK ON OTHER HIDDEN THINGS

*/
interface ICalendarProperties {
  properties: IProperty[];
}

interface IEvent{
  start: string;
  end: string;
  name: string
}
const events: IEvent[]= [
  {
    start: "2023-04-25T00:00:00.000Z",
    end: "2023-05-03T00:00:00.000Z",
    name: "Event One",
  },
  {
    start: "2023-05-07T00:00:00.000Z",
    end: "2023-05-09T100:00:00.000Z",
    name: "Event two",
  },
  {
    start: "2023-04-30T00:00:00.000Z",
    end: "2023-05-02T00:00:00.000Z",
    name: "Event three",
  },
  {
    start: "2023-04-30T00:00:00.000Z",
    end: "2023-05-02T00:00:00.000Z",
    name: "Event four",
  },
  {
    start: "2023-05-02T00:00:00.000Z",
    end: "2023-05-03T00:00:00.000Z",
    name: "Event five",
  },
];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const PropertyCalendarWeekView = (props: ICalendarProperties) => {
  const [date, setDate] = useState(new Date());
  const [currentWeek, setCurrentWeek]=useState(format(date, "d-MMM-yyyy"));
  const [days, setDays] = useState<Date[]>([])
  const [sameWeekEvents, setSameWeekEvents] = useState<IEvent[]>([])
  const [firstDayCurrentWeek, setFirstDayCurrentWeek] = useState(parse(currentWeek, "d-MMM-yyyy", new Date(date)))
  useEffect(()=>{
    setFirstDayCurrentWeek(parse(currentWeek, "d-MMM-yyyy", new Date(date)))
  },[currentWeek, date])
 
  useEffect(()=>{
    setDays(eachDayOfInterval({
    start: startOfISOWeek(firstDayCurrentWeek),
    end: endOfISOWeek(firstDayCurrentWeek),
  }))},[firstDayCurrentWeek]);

  

  const spanningEvents = events.filter((event)=>!isSameDay(parseISO(event.start), parseISO(event.end)))
  const newItems = spanningEvents.map((e)=>{
    const name= e.name;
    // const durations= eachDayOfInterval({
    //   start: new Date(parseISO(e.start)),
    //   end: new Date(parseISO(e.end))
    // })
    // return{[name]: durations}
  })
  const handleNext = () =>
    setDate(new Date(dayjs(date).add(1, "week").format()));
  const handlePrev = () =>
    setDate(new Date(dayjs(date).subtract(1, "week").format()));

  useEffect(()=>{
    console.log(events)
    setSameWeekEvents(events.filter(
    (event) =>
      dayjs(event.start).isSame(date, "month") &&
      dayjs(event.start).isSame(date, "year")
  ))},[date]);

  useEffect(()=>{
    setCurrentWeek(format(date, "d-MMM-yyyy"))
  },[date])

  useEffect(()=>{
    console.log(sameWeekEvents)
  },[sameWeekEvents])
  // console.log(newItems);

  return (
    <div className="w-full">
      <div className="flex space-x-4">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="flex w-full border border-green-950 px-2 rounded-md">
        {days.map((dy, index) => {
          return (
            <div key={index} className="w-full">
              {format(dy, "E")}
            </div>
          );
        })}
      </div>
      <div className="h-screen overflow-x-hidden">
        <div>
        <div className="flex">
          {days.map((day, index) => {
            return (
              <div key={index} className='border-r border-gray-800 w-full last:border-none'>
                {sameWeekEvents
                  .filter((evt) => isSameDay(parseISO(evt.start), day))
                  .map((event, index) => {
                    return (
                      <div key={index} className="">
                        <div className={` w-full bg-slate-500 `}>
                          {event.name}
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
        </div>
        <div className="flex">
        {days.map((day, index) => {
          return (
            <div
              key={index}
              className=" border-r border-gray-800 w-full last:border-none"
            >
              <div>Here </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default PropertyCalendarWeekView;
