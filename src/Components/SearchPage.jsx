import React from 'react'
import Sidebar from '../Components/Sidebar'
import Search from '../Components/Search'
function SearchPage() {
    return (
        <div className='app__page'>
            <Sidebar />
            <Search />
        </div>
    )
}

export default SearchPage