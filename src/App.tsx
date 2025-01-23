import {  Route, Routes } from 'react-router-dom';
import './App.css'
import Component from './Component/Component';
import CursorDragon from './Component/CursorDragon/CursorDragon';


function App() {
  

  return (
    <div>
      <Routes>
      <Route path='/' element={<Component />}/>
      <Route path='/dragon-page' element={<CursorDragon />}/>
    </Routes>
    </div>
    



  )
}

export default App
