import React, { useState } from "react"

interface Props {}

const Home: React.FC<Props> = () => {
  // console.log(currentUser)
  const [startTime, setStartTime] = useState<number>(0)
  const [allTimes, setAlltimes] = useState<number[]>([])
  const [isGameStared, setIsGameStarted] = useState<boolean>(false)
  const blockColor = isGameStared ? "green" : "red"

  const handleGameStartClick = () => {
    setTimeout(function () {
      setIsGameStarted(true)
      const nowInMs = new Date().getTime()
      setStartTime(nowInMs)
    }, 3000)
  }

  const handleGameClick = () => {
    if (!isGameStared) return
    const nowInMs = new Date().getTime()
    setIsGameStarted(false)
    const difference = nowInMs - startTime
    // console.log({ start: startTime })
    // console.log({ end: nowInMs })
    // console.log({ difference: nowInMs - startTime })
    setAlltimes([...allTimes, difference])
  }

  return (
    <div>
      <h1>This is the home page!</h1>
      <h2>When square turns green, click!</h2>
      <div
        style={{
          height: 300,
          width: 500,
          backgroundColor: blockColor,
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          marginBottom: 50,
        }}
      ></div>
      <button onClick={handleGameStartClick}>Click to start Game</button>
      <button onClick={handleGameClick}>Click When Turns Green!</button>

      {allTimes.length > 0 && (
        <ul>
          {allTimes.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home
