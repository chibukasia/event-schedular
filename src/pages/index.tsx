import { Inter } from 'next/font/google'
import Calendar from '@/components/calendar/calendar'
import { IDayProps } from '@/components/calendar/DayView'
import DayViewListCards from '@/components/organisms/DayViewLiistCards'

const properties: IDayProps[]=[
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
    itemType: "WorkOrder",
    itemName: "Wine maintainace",
    description: "This is just a description about that particular item",
    status: "Submitted",
    propertyName: "Sample name",
    assignee: "Trenton Alie",
  }
]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <Calendar/>
        <DayViewListCards properties={properties}/>
      </div>
    </main>
  )
}
