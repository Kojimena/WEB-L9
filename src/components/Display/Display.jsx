import React from "react"
import PropTypes from "prop-types"
import styles from "./Display.module.css"

const Display = ({ value, testId }) => (
  <div className={styles.display} data-testid={testId}>
    {value}
  </div>
)
Display.propTypes = {
  value: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
}

export default Display
