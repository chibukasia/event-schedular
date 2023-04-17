import React from "react";

export interface IDayProps {
    id: string | number;
    itemType: string;
    itemName: string;
    description: string;
    status: string;
    assignee: string;
    propertyName: string;
    handleViewClick?: ()=>void
}
export default function PropertyCalendarDayViewCard(props: IDayProps){
    const {itemName, itemType, description, status, assignee, propertyName, handleViewClick} =props

    return(
        <div className="flex">
            <div className="w-3 bg-[#88C2E4]"></div>
            <div className="m-2">
                <h2 className="text-lg text-[#82B3D2] font-semibold font-[Helvetica]">{itemType}</h2>
                <h2 className="text-lg font-semibold font-[Helvetica]">{itemName}</h2>
                <p className="font-[Helvetica]">{description}</p>
                <div className="rounded-lg bg-[#FDF9DE] border border-[#9D8B3C] w-fit px-2">
                    <p className="text-[#9D8B3C] font-semibold">{status}</p>
                </div>
                <p>{assignee} <a className="text-[#82B3D2] font-semibold" href="#">{propertyName}</a></p>
                <button onClick={handleViewClick}>View</button>
            </div>
        </div>
    )
}