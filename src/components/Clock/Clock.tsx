import { useEffect, useState } from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date())

  const refreshClock = () => {
    setTime(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanUp() {
      clearInterval(timerId)
    }
  }, [])

  return (
    <div>
      <h1>{time.toLocaleTimeString('zh-TW')}</h1>
    </div>
  )
}
