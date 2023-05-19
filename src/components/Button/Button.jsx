import React from "react"
import PropTypes from "prop-types"
import styles from "./Button.module.css"

const Button = ({ value, type, onClick }) => (
  <button
    type="button"
    className={type === "operator" ? styles.operator : styles.number}
    onClick={onClick}
  >
    {value}
  </button>
)
Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["number", "operator"]).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
