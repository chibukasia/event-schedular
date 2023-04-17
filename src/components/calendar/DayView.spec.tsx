import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import PropertyCalendarDayViewCard from "./DayView";

const testFunc = jest.fn()

beforeEach(()=>{
    render(
        <PropertyCalendarDayViewCard
          id={1}
          itemName="Test item name"
          itemType="Test item type"
          description="This is a test description"
          status="Completed"
          assignee="Test Assignee"
          propertyName="Test property name"
          handleViewClick={testFunc}
        />
      );
})
describe("Tests the property calendar day view card", () => {
  it("Tests if the props are passed down correctly", () => {
    expect(screen.getByText('Test item name')).toBeTruthy()
    expect(screen.getByText('This is a test description')).toBeTruthy()
    expect(screen.getByText('Test property name')).toBeTruthy()
  });

  it('Tests the view button click function',()=>{
    const viewBtn = screen.getByRole('button')
    fireEvent.click(viewBtn)
    expect(testFunc).toBeCalled()
  })
});
