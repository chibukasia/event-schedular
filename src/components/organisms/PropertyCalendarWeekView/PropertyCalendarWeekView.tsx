import React from "react";
import PropertyCalendarWeekViewCard, {
  IProperty,
} from "@/components/calendar/Property CalendarWeekViewCard/PropertyCalendarWeekViewCard";
/*
CHECK ON EACH DAY PROPERTIES
CHECCK ON EVENTS
CHECK ON OTHER HIDDEN THINGS

*/
interface ICalendarProperties {
  properties: IProperty[];
}
const PropertyCalendarWeekView = (props: ICalendarProperties) => {
  const { properties } = props;
  return (
    <div data-testid='week-view'>
      {properties.map((property: IProperty, index: number) => {
        return (
          <div key={index}>
            <PropertyCalendarWeekViewCard 
            id={property.id}
            itemName={property.itemName}
            itemType={property.itemType}
            status={property.status}
            assignee={property.assignee}
            propertyName={property.propertyName}
             />
          </div>
        );
      })}
    </div>
  );
};

export default PropertyCalendarWeekView;

