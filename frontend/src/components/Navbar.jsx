import React from 'react'
import {Link } from 'react-router-dom'
import { useAuth } from '../context/ContextProvider'
const Navbar = ({setQuery}) => {
    const {user, logout} = useAuth()
   
  return (
    <nav className='bg-gray-800 p-4 text-white flex justify-between items-center'>
        <div className='text-xl fpont-bold'>
            <Link to="/">NoteApp</Link>
        </div>
        <input type='text' placeholder='Search notes...' className='bg-grey-600 px-4 py-2 rounded' onChange={(e) => setQuery(e.target.value)}/>
        <div>
            <span className='mr-4'>user name</span>
            {!user ? (
                <>
                <Link to="/login" className='bg-green-500 px-4 py-2 rounded mr-4'>Login</Link>
            <Link to="/signup" className='bg-green-500 px-4 py-2 rounded mr-4'>Signup</Link>
            </>
            ) : (
                <>
                <span className='"mr-4'>{user.name}</span>

                <button className='bg-red-500 px-4 py-2 rounded'>Login</button>
                </>
            )}
            

            
        </div>
    </nav>
  )
}

export default Navbar