import React from "react"
import Navbar from "./Navbar"
import TodoItem from "./TodoItem"
import ContactCard from "./ContactCard"
import Joke from "./Joke"
import jokesData from "./jokesData"
import Product from "./Product"
import vschoolsProducts from "./vschoolsProducts"

function App() {

  {/* 
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline}/>)
  */}

  const productComponents = vschoolsProducts.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description}/>)

  return (
    <div>
    {/* 
      <Navbar name="Leandro"/>
      <Navbar name="Roberto" number={4}/>

      <ContactCard 
        contact = {{name: "Mr Whiskas", imgUrl: "http://placekitten.com/300/200", phone:"92014021", email:"sdalknsalk@laknfakl.com" }}
      />
      <ContactCard 
        contact = {{name:"Mr A", imgUrl:"http://placekitten.com/300/100", phone:"3453441", email:"cvbvcbvcc@laknfakl.com" }}   
      />
      <ContactCard 
        contact = {{name:"Mr Whiskas", imgUrl:"http://placekitten.com/100/200", phone:"7547542", email:"sfsfsf@laknfakl.com" }}
        
      />
      <ContactCard 
        contact = {{name:"Mr Whiskas", imgUrl:"http://placekitten.com/600/100" ,phone:"14141421" ,email:"eqwrqr@laknfakl.com" }}
      />
    */}
      {/*{jokeComponents}*/}

      {productComponents}

    </div>
  )
}


export default App