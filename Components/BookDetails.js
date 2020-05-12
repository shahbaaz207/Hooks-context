import React, {useContext } from 'react'
import { BookContext } from '../Context/BookContext'

export default function BookDetails({book}) {
    const {removeBook}=useContext(BookContext)

    return (
        <div>
            <li onClick={()=>removeBook(book.id)}>
                <div className="title">
                   <h3> {book.title}</h3> 
                    <p>{book.author}</p> 
                   </div>
            </li>
        </div>
    )
}
