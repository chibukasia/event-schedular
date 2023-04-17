import React from "react";
import DayViewListCards from "./DayViewLiistCards";
import { screen, render } from "@testing-library/react";

const properties=[
    {
      id: 1,
      itemType: "WorkOrder",
      itemName: "Wine maintainace",
      description: "This is just a description about that particular item",
      status: "Submitted",
      propertyName: "Sample name",
      assignee: "Trenton Alie",
    },
    {
      id: 2,
      itemType: "Checklist",
      itemName: "Wine maintainace new",
      description: "This is just a description about that particular wine i guess",
      status: "Completed",
      propertyName: "Sample Property",
      assignee: "Trenton Alien",
    }
  ]

  beforeEach(()=>{
    render(<DayViewListCards properties={properties}/>)
  }) 


  describe('Tests the Day view list component', ()=>{
    it('Tests if the component mounts', ()=>{
        expect(screen.getByText('Sample Property')).toBeTruthy()
        expect(screen.getByText('WorkOrder')).toBeTruthy()
        expect(screen.getByText('Trenton Alien')).toBeTruthy()
        const div = screen.getByTestId('day-grid-card-list')
        expect(div.children.length).toBe(2)
    })
  })