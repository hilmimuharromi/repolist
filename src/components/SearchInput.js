import React, {useState} from 'react'
import Spinner from './Spinner'
const SearchInput = ({setQuery, loading}) => {
    const [input, setInput] = useState('')
    return (
        <form
            className='flex justify-center'
            onSubmit={(e) => {
                e.preventDefault()
                // console.log('masuk', input)
                setQuery(input)
            }
            }>
            <input
                className='mr-10 rounded-sm w-20 shadow'
                placeholder='Search by Username' 
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                />
            <button
                className='flex justify-center bg-primary shadow p-10 rounded-sm w-10'
                type='submit'
                disabled={loading}
            >
                {
                    loading ? <Spinner /> : 'Search'
                }
            </button>
        </form>
    )
}

export default SearchInput