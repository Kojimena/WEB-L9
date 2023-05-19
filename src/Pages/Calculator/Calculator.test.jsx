import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Calculator from "./Calculator"

describe("Calculator component", () => {
  it("Addition operation", async () => {
    const { getByText, getByTestId } = render(<Calculator />)

    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("+"))
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("="))

    expect(getByTestId("calculator-display").textContent).toBe("3")
  })
  it("Subtraction operation", async () => {
    const { getByText, getByTestId } = render(<Calculator />)
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("−"))
    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("="))
    expect(getByTestId("calculator-display").textContent).toBe("1")
  })
  it("Clear button operation", async () => {
    const { getByText, getByTestId } = render(<Calculator />)
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("−"))
    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("="))
    fireEvent.click(getByText("C"))
    expect(getByTestId("calculator-display").textContent).toBe("")
  })
  it("Multiplication operation", async () => {
    const { getByText, getByTestId } = render(<Calculator />)
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("×"))
    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("="))
    expect(getByTestId("calculator-display").textContent).toBe("2")
  })
  it("Division operation", async () => {
    const { getByText, getByTestId } = render(<Calculator />)
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("÷"))
    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("="))
    expect(getByTestId("calculator-display").textContent).toBe("2")
  })
})
