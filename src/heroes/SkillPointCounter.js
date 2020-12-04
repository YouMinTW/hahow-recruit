const SkillPointCounter = ({ name, value, setSkillPoints, remain }) => {
  const increment = () =>
    setSkillPoints(prevStatus => {
      if (remain > 0) {
        return { ...prevStatus, [name]: value + 1 }
      } else {
        return prevStatus
      }
    })
  const decrement = () =>
    setSkillPoints(prevStatus => {
      if (value > 0) {
        return { ...prevStatus, [name]: value - 1 }
      } else {
        return prevStatus
      }
    })
  return (
    <div>
      <span>{name}</span>
      <button onClick={increment}>+</button>
      <span>{value}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default SkillPointCounter
