import React from "react";

export interface IProperty{
    id: string | number;
    itemType: string;
    itemName: string;
    status: string;
    assignee: string;
    propertyName: string
}
const PropertyCalendarWeekViewCard = (props: IProperty)=>{
    const {itemName, itemType, status, assignee, propertyName} = props
    return(
        <div className="w-full border border-[#66A0C9] rounded-lg font-[Helvetica] p-2">
            <div>
                <h2 className="text-[#66A0C9] uppercase font-semibold">{itemType}</h2>
                <p>{itemName}</p>
                <p className="font-semibold">{assignee}</p>
                <p className="uppercase font-semibold">{status}</p>
            </div>
            <hr/>
            <div>
              <p className="capitalize text-[#66A0C9] font-semibold">{propertyName}</p>
            </div>
        </div>
    )
}

export default PropertyCalendarWeekViewCard