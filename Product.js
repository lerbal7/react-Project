import React from "react"

function Product(props) {

  const stylesPrice = {
    fontSize: "22px",
    padding: "20px",
    color: "#A10B47",
    border: "1px solid black"
  }

  const stylesDesc = {
    fontSize: "23px",
    color: "white",
    backgroundColor: "#A10B0B",
    padding: "20px"
  }

  return(
    <div className="card">
      <h1 className="headerStyle">{props.name}</h1>
      <p style={stylesPrice}>Price: {props.price}</p>
      <p style={stylesDesc}>Description: {props.description}</p>
    </div>
  )
}

export default Product