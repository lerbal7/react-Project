import React from "react"
import Navbar from "./Navbar"
import TodoItem from "./TodoItem"
import ContactCard from "./ContactCard"

function App() {
  return (
    <div>
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
    </div>
  )
}


export default App