import React, {useState} from 'react'
import "./App.css"
import { SearchInput, ListRepo } from './components'
import useFetch from './hooks/useFetch'
export const App = () => {
  const [query, setQuery] = useState('')
  const {data, loading} = useFetch(query)


  return (
    <div className='layout'>
      <div className='container'>
        <SearchInput
        setQuery={setQuery}
        loading={loading}
        />
        <ListRepo 
        data={data}
        />
      </div>
    </div>
  )
}

export default App