import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import config from '../config.json'

dayjs.extend(utc)
dayjs.extend(timezone)

export default function Countdown({ saleFlag }) {
  let date = config.presaleMintDate
  if (saleFlag === 1) {
    date = config.mintDate
  }
  const router = useRouter()
  const reload = () => {
    router.reload()
    return
  }
  const calculateTimeLeft = () => {
    const difference =
      +dayjs(date).tz('Europe/Paris', true).valueOf() - +dayjs().valueOf()
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

  return timeLeft.days &&
    timeLeft.hours &&
    timeLeft.minutes &&
    timeLeft.seconds ? (
    <div className="countdown mt--10">
      {timeLeft.days > 0 && (
        <div className="countdown-container days">
          <span className="countdown-value">{timeLeft.days}</span>
          <span className="countdown-heading text-xs font-tomoe">Days</span>
        </div>
      )}
      <div className="countdown-container hours">
        <span className="countdown-value">{timeLeft.hours}</span>
        <span className="countdown-heading text-xs font-tomoe">Hrs</span>
      </div>
      <div className="countdown-container minutes">
        <span className="countdown-value">{timeLeft.minutes}</span>
        <span className="countdown-heading text-xs font-tomoe">Mins</span>
      </div>
      <div className="countdown-container seconds">
        <span className="countdown-value">{timeLeft.seconds}</span>
        <span className="countdown-heading text-xs font-tomoe">Secs</span>
      </div>
    </div>
  ) : (
    <a
      onClick={reload}
      className="btn btn-large btn-primary-alta cursor-pointer my-5"
    >
      Refresh page
    </a>
  )
}
