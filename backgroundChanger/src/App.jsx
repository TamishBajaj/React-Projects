import {useState} from 'react'


function App() {
  
  const [color,setColor]=useState("olive")

  return (
    //onClick demands for a funtion thats why here hume aise setColor pass karna pada
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl'>
                
        <button onClick={()=>setColor('red')} className='px-4 outline-none py-1 rounded-full text-white' style={{backgroundColor:'red'}} >Red</button>
        <button onClick={()=>setColor('green')} className='px-4 outline-none py-1 rounded-full text-white' style={{backgroundColor:'green'}} >Green</button>
        <button onClick={()=>setColor('yellow')} className='px-4 outline-none py-1 rounded-full text-white' style={{backgroundColor:'yellow'}} >Yellow</button>
        <button onClick={()=>setColor('blue')} className='px-4 outline-none py-1 rounded-full text-white' style={{backgroundColor:'blue'}} >blue</button>
        <button onClick={()=>setColor('pink')} className='px-4 outline-none py-1 rounded-full text-white' style={{backgroundColor:'pink'}} >Pink</button>
        <button onClick={()=>setColor('black')} className='px-4 outline-none py-1 rounded-full text-white' style={{backgroundColor:'black'}} >black</button>
        <button onClick={()=>setColor('brown')} className='px-4 outline-none py-1 rounded-full text-white' style={{backgroundColor:'brown'}} >Brown</button>

      </div>
      </div>
      
    </div>
  )
}

export default App
