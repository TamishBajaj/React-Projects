import {useState} from 'react' // Ye agya apka hook
import './App.css'


function App() {
  
let [counter,setCounter]=useState(10) // useState mei default value dege



//let counter=0
// Variables mei change karna hai karo, but agar UI mei change lana hai toh react will control the game

//--> React gave us hooks, ki hooks ke through hi data update joga UI mei
const addValue= () =>{
  counter++              // Is code se UI mei ye value update nahi hogi 
  setCounter(counter)                  
}
const dereaseValue= () =>{
  if(counter>0){
    
    setCounter(counter--)      
  }
  else{
    alert("You can't decrease the value below zero,now you can only increase it")
  }
}
  return (
    <>
   <h1>This is my counter Project</h1>
    <h2>Counter Value: {counter}</h2>
    <div className='container'>
   <button onClick={addValue}>Increase Value</button>
    <br/>
   <button onClick={dereaseValue}>Decrease Value</button>
   </div>
   </>
  )
}

export default App
