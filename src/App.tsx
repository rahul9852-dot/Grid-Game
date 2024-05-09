import React,{ useState } from 'react'
import "./App.css";
function App() {

  const [color, setcolor] = useState<number | undefined>();
  const gridGame = new Array(100).fill(0);

  function handleStart(){
    console.log("clicked!!");
    const randomColor:number = Math.floor(Math.random()*100);
    console.log("random Nuber", randomColor);
    setcolor(randomColor);
    
  }

  console.log("randomColor", color)
  return (
    <div className='main'>
        <div className='btn-container'>
          <button className='btn' onClick={handleStart}>Start</button>
          <button className='btn'>Pause</button>
          <button className='btn'>Reset</button>
        </div>
        <div className='container'>
          <div className='grid-container'>
        {gridGame.map((grid, index:number)=>(
            <div key={index} className={`grid-box ${color == index + 1 ? 'active' :'}'}`}>{index+1}</div>
            ))}
        </div>
        </div>
      </div>
  )
}

export default App;
