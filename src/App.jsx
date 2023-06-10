import { useState } from "react"

function App() {
  const [array, setArray] = useState(["A", "B", "C"])

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1)
    })
  }

  return (
    <>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <br />
      <div>{array.join(",")}</div>
    </>
  )
}

export default App
