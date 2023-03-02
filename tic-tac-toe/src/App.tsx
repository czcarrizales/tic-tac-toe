import { useState } from 'react'
import './App.css'

function App() {

  

  return (
    <div className="App">
      <div className='container'>
        <div className='top-row row'>
          <div className='top-left square'>1</div>
          <div className='top-middle square'>1</div>
          <div className='top-right square'>1</div>
        </div>
        <div className='middle-row row'>
          <div className='middle-left square'>1</div>
          <div className='middle square'>1</div>
          <div className='middle-right square'>1</div>
        </div>
        <div className='bottom-row row'>
          <div className='bottom-left square'>1</div>
          <div className='bottom-middle square'>1</div>
          <div className='bottom-right square'>1</div>
        </div>
      </div>
    </div>
  )
}

export default App