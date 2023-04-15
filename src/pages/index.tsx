import { Inter } from 'next/font/google'
import Calendar from '@/components/calendar/calendar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <Calendar/>
      </div>
    </main>
  )
}
