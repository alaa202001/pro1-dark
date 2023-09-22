
import './App.css'

function App() {
  let person = "alaa zidan";
  const changeName = () => {
    person = "cabitano";
  };


  return (
    <>
      <div>
        <h2>M Name Is {person}</h2>
        <button onClick={changeName}>count is 0</button>
        
      </div>
    
    </>
  )
}

export default App
