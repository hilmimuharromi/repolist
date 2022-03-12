import React from 'react'
import "./App.css"
import { SearchInput, ListRepo } from './components'
export const App = () => {
  return (
    <div className='layout'>
      <div className='container'>
        <SearchInput />
        <ListRepo />
      </div>
    </div>
  )
}

export default App