import React, { useState } from "react"
import styles from "./Calculator.module.css"
import Button from "../../components/Button/Button"
import Display from "../../components/Display/Display"

const Calculator = () => {
  const [current, setCurrent] = useState("")
  const [previous, setPrevious] = useState(null)
  const [operation, setOperation] = useState(null)

  const handleNumberClick = (value) => {
    if ((current.includes(".") && value === ".") || current.length >= 9) {
      return
    }
    setCurrent(current + value)
  }

  const handleOperatorClick = (value) => {
    if (current === "" && value !== "−") return
    let tempCurrent = current
    if (previous !== null && operation !== null) {
      const numCurrent = parseFloat(tempCurrent)
      const numPrevious = parseFloat(previous)
      let result
      switch (operation) {
        case "+":
          result = numPrevious + numCurrent
          break
        case "−":
          result = numPrevious - numCurrent
          break
        case "×":
          result = numPrevious * numCurrent
          break
        case "÷":
          if (numCurrent === 0) {
            setCurrent("ERROR")
            return
          }
          result = numPrevious / numCurrent
          break
        case "%":
          result = numPrevious % numCurrent
          break
        default:
          return
      }
      tempCurrent = String(result).slice(0, 9)
    }
    setPrevious(tempCurrent)
    setCurrent("")
    setOperation(value)
  }

  const handleEqualClick = () => {
    if (previous == null || current === "" || operation == null) return
    const numCurrent = parseFloat(current)
    const numPrevious = parseFloat(previous)
    let result
    switch (operation) {
      case "+":
        result = numPrevious + numCurrent
        break
      case "−":
        result = numPrevious - numCurrent
        if (result < 0) {
          setCurrent("ERROR")
          return
        }
        break
      case "×":
        result = numPrevious * numCurrent
        break
      case "÷":
        if (numCurrent === 0) {
          setCurrent("ERROR")
          return
        }
        result = numPrevious / numCurrent
        break
      case "%":
        result = numPrevious % numCurrent
        break
      default:
        return
    }
    if (result > 999999999) {
      setCurrent("ERROR")
    } else {
      setCurrent(String(result).slice(0, 9))
    }
    setPrevious(null)
    setOperation(null)
  }

  const handleClearClick = () => {
    setCurrent("")
    setPrevious(null)
    setOperation(null)
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.title}>COOL· CALCU</div>
      <div className={styles.container}>
        <Display value={current} testId="calculator-display" />
        <div className={styles.buttons}>
          <Button onClick={handleClearClick} label="C" value="C" />
          <Button onClick={() => handleOperatorClick("−")} value="−" type="operator" />
          <Button onClick={() => handleOperatorClick("%")} value="%" type="operator" />
          <Button onClick={() => handleOperatorClick("÷")} value="÷" type="operator" />
          <Button onClick={() => handleNumberClick("7")} value="7" type="number" />
          <Button onClick={() => handleNumberClick("8")} value="8" type="number" />
          <Button onClick={() => handleNumberClick("9")} value="9" type="number" />
          <Button onClick={() => handleOperatorClick("×")} value="×" type="operator" />
          <Button onClick={() => handleNumberClick("4")} value="4" type="number" />
          <Button onClick={() => handleNumberClick("5")} value="5" type="number" />
          <Button onClick={() => handleNumberClick("6")} value="6" type="number" />
          <Button onClick={() => handleOperatorClick("+")} value="+" type="operator" />
          <Button onClick={() => handleNumberClick("1")} value="1" type="number" />
          <Button onClick={() => handleNumberClick("2")} value="2" type="number" />
          <Button onClick={() => handleNumberClick("3")} value="3" type="number" />
          <Button onClick={() => handleNumberClick("0")} value="0" type="number" />
          <Button onClick={() => handleNumberClick(".")} value="." type="number" />
          <Button onClick={() => handleEqualClick()} value="=" type="operator" />
        </div>
      </div>
    </div>
  )
}

export default Calculator
