import React from "react";
import PropertyCalendarDayViewCard from "../calendar/DayView";
import { IDayProps } from "../calendar/DayView";

export interface IProperties {
  properties: IDayProps[];
}
export default function DayViewListCards(props: IProperties) {
  const { properties } = props;
  const viewClick = (id: string| number)=>{
    console.log(id)
  }
  return (
    <div data-testid='day-grid-card-list'>
      {properties.map((property: IDayProps, index: number) => {
        return (     
          <div key={index} className="mb-5">
            <PropertyCalendarDayViewCard
            id={property.id}
            itemName={property.itemName}
            itemType={property.itemType}
            description={property.description}
            status={property.status}
            assignee={property.assignee}
            propertyName={property.propertyName}
            handleViewClick={()=>viewClick(property.id)}
          />
          </div>
        );
      })}
    </div>
  );
}
