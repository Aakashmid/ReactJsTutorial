import React, { useEffect, useState } from 'react'
import Suggestion from './Suggestion'


export default function SearchAutocomplete() {
    const [users, setUsers] = useState([])
    const [filteredusers, setFilteredUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState('')
    const [showSuggestion, setShowSuggestion] = useState(false)
    const fetchUsers = async (query) => {
        setLoading(true)
        try {
            const response = await fetch(`https://dummyjson.com/users/`)
            const data = await response.json()
            if (data && data.users && data.users.length > 0) {
                setUsers(data.users.map((item) => item.firstName))
                setLoading(false)
                setError(null);
            }
        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }


    const handleChnage = (e) => {
        const query = e.target.value.toLowerCase()
        setSearchParam(e.target.value)
        // console.log(users)

        if (query.length > 1) {
            const filtered = users.filter((user) => user.toLowerCase().includes(query))
            setFilteredUsers(filtered)
            setShowSuggestion(true)
            console.log(filtered)
        } else {
            setShowSuggestion(false)
            setFilteredUsers([])
        }
    }

    const handleOnClickSuggestion = (e) => {
        setSearchParam(e.target.innerText)
        setShowSuggestion(false)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className='flex justify-center items-center '>
            <div className="flex flex-col gap-5">
                <input type="text" className="w-[30remrem] focus:outline-none border rounded-lg  p-2 " placeholder='search users here ' value={searchParam} onChange={handleChnage} />
                
                {showSuggestion &&  <Suggestion data={filteredusers}  handleClick={handleOnClickSuggestion}/>}
            </div>
        </div>
    )
}
