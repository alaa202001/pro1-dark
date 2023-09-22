
import './App.css'
import { useState } from "react";

function App() {
  // useState
  const [name , setName] = useState("Alaa Zidan");
  const [age , setAge] = useState (22)
  const [count, setCount] = useState(0);


  // countfunction
  const changeCount = () => {
    setCount(count+1);
  }




  return (
    <>
      <div>
        <h2>M Name Is {name}</h2>
        <button onClick={() =>{setName("Capitano")}}>Change Name</button>
        
      </div>
      <br />
      <br />

      <h2>My Age Ise {age}</h2>
      <button onClick={() => {setAge(23)}}>Chanege Age</button>
      <br />
      <br />
      <button onClick={changeCount}>Count is {count}</button>
    
    </>
  )
}

export default App
