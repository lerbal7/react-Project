import React from "react"
import "./style.css"

function Navbar(props) {

  const date = new Date()
  const hours = date.getHours()

  const styleItem1 = {
    color: "red"
  }

  const stylePara = {
    fontSize: "20px"
  }

  if (hours < 12) {
    stylePara.backgroundColor = "red"
  } else if (hours > 12 && hours <= 18) {
    stylePara.backgroundColor = "green"
  } else {
    stylePara.backgroundColor = "yellow"
  }

  return (
    <nav>
      <ul>
        <li style={styleItem1}>Item 1</li>
        <li className="item2">Item 2</li>
        <li>Item {props.number}</li>
      </ul>

      <p style={stylePara}>Hello {props.name}</p>
    </nav>
  )
}

export default Navbar