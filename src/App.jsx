import { useState } from "react";



function App() {
  let [color,setColor] = useState('white');
  
  
  function Displaycolor(props)
  {
    console.log(props);
      return(
        <>
          <button onClick={()=>{
            setColor(props.colors);
            
          }} style={{backgroundColor:props.colors,color:props.f}} className='w-1/12 rounded-xl '>{props.colors}</button>
        </>
      );
  }

  return (
    <div style={{backgroundColor:color,height:100+'vh',width:100+'vw',transition:1+'s'}} className="flex justify-center">
      <footer className="bg-gray-400 rounded-xl h-10 w-3/4 p-2 fixed bottom-3 flex justify-evenly">
        <Displaycolor  colors="yellow" />
        <Displaycolor colors="red" />
        <Displaycolor colors="blue" />
        <Displaycolor colors="purple" />
        <Displaycolor colors="pink" />
        <Displaycolor colors="white" />
        <Displaycolor colors="orange" />
        <Displaycolor colors="violet" />
        <Displaycolor colors="black" f="white"/>


      </footer>
    </div>
  )
}

export default App
