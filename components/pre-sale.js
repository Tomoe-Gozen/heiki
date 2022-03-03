import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

export default function PreSale() {
  const calculateTimeLeft = () => {
    let difference =
      +dayjs('2022-03-05 14:00:00').tz('Europe/Paris', true).valueOf() -
      +dayjs().valueOf()

    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, '0'),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, '0'),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, '0'),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, '0')
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  return (
    <div className="countdown mt--50">
      <div className="countdown-container days">
        <span className="countdown-value">{timeLeft.days}</span>
        <span className="countdown-heading">Days</span>
      </div>
      <div className="countdown-container hours">
        <span className="countdown-value">{timeLeft.hours}</span>
        <span className="countdown-heading">Hrs</span>
      </div>
      <div className="countdown-container minutes">
        <span className="countdown-value">{timeLeft.minutes}</span>
        <span className="countdown-heading">Mins</span>
      </div>
      <div className="countdown-container seconds">
        <span className="countdown-value">{timeLeft.seconds}</span>
        <span className="countdown-heading">Secs</span>
      </div>
    </div>
  )
}
