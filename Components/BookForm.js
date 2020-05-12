import React, { useContext, useState } from 'react'
import { BookContext } from '../Context/BookContext'

export default function BookForm() {
    const {addBook}=useContext(BookContext)
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        addBook(title,author)
        setTitle('')
        setAuthor('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="input" type="text" onChange={(e)=>{setTitle(e.target.value)}} placeholder="add Title" value={title}  required/>
            <input  className="input" type="text" onChange={(e)=>{setAuthor(e.target.value)}} placeholder="add author name" value={author} 
             required/>
             <input type="submit" value="Add Book"/>
       </form>
    )
}
