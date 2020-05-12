import React,{useContext} from 'react'
import { BookContext } from '../Context/BookContext'

const Navbar=()=> {
     const {books}=useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Shahbaz Reading List</h1>
            <p>Currently you  have {books.length} books to ge thorugh</p>
        </div>
    )
}
export default Navbar