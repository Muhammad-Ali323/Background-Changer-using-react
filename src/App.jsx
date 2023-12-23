import { useState } from 'react'
import './App.css'
import Colors from './components/colors'

function App() {
  const [clr, setClr]= useState('white')
  const chanj=(event)=>{
    setClr(event.target.textContent)
  }
  return (
    <div id='background' className='p-0 m-0 w-full h-full flex flex-wrap justify-center' style={{backgroundColor: clr}}>
      <div className=' justify-center flex flex-wrap mb-10 w-9/12 h-12 self-end bg-slate-400 rounded-2xl'>
        <Colors colorChange={chanj} color='red'/>
        <Colors colorChange={chanj} color='yellow'/>
        <Colors colorChange={chanj} color='blue'/>
        <Colors colorChange={chanj} color='gray'/>
        <Colors colorChange={chanj} color='white'/>
        <Colors colorChange={chanj} color='green'/>
        <Colors colorChange={chanj} color='orange'/>
        <Colors colorChange={chanj} color='black' textclr='white'/>
      </div>
    </div>
  )
}

export default App
