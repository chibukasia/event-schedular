import { render, screen } from "@testing-library/react";
import React from "react";
import PropertyCalendarWeekView from "./PropertyCalendarWeekView";

const properties=[
    {
      id: 1,
      itemType: "WorkOrder",
      itemName: "Wine maintainace",
      status: "Submitted",
      propertyName: "Sample name",
      assignee: "Trenton Alie",
    },
    {
      id: 2,
      itemType: "Checklist",
      itemName: "Wine maintainace new",
      status: "Completed",
      propertyName: "Sample Property",
      assignee: "Trenton Alien",
    }
  ]

  describe('It Test the Property Calendar Week View',()=>{
    it('Tests if the component mounts',()=>{
        render(
            <PropertyCalendarWeekView properties={properties}/>
        )
        expect(screen.getByText('Sample Property')).toBeTruthy()
        expect(screen.getByText('WorkOrder')).toBeTruthy()
        expect(screen.getByText('Trenton Alien')).toBeTruthy()
        const div = screen.getByTestId('week-view')
        expect(div.children.length).toBe(2)
    })
  })