import React from "react";
import { screen, render } from "@testing-library/react";
import PropertyCalendarWeekViewCard from "./PropertyCalendarWeekViewCard";

describe('Tests Property Calendar Day View Card component',()=>{
    it('Tests of the component mounts',()=>{
        const {baseElement}=render(
            <PropertyCalendarWeekViewCard 
            id={1}
            itemName="Test item name"
            itemType="Test item type"
            status="Completed"
            assignee="Test Assignee"
            propertyName="Test property name"
            />
        )

        expect(baseElement).toBeTruthy()
        expect(screen.getByText('Test item name')).toBeInTheDocument()
    })
})