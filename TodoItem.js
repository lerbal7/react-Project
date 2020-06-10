import React from "react"
import "./style.css"

function TodoItem() {

  const styles = {
    color: "red"
  }

  return (
    <div>
      <input type="checkbox" />
      <p style={styles}>Placeholder goes in here</p>
    </div>
  )
}

export default TodoItem