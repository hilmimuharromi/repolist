import React, {useState} from 'react'

const SearchInput = () => {
    const [input, setInput] = useState('')
    return (
        <form
            className='flex justify-center'
            onSubmit={(e) => {
                e.preventDefault()
                console.log('masuk', input)
            }
            }>
            <input
                className='mr-10 rounded-sm w-20 shadow'
                placeholder='Search by Username' 
                onChange={(e) => setInput(e.target.value)}
                />
            <button
                className='flex justify-center bg-primary shadow p-10 rounded-sm w-10'
                type='submit'
            >Search</button>
        </form>
    )
}

export default SearchInput