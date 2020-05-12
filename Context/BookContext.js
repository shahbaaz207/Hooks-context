import React ,{createContext,useState} from 'react'
// import uuid from 'uuid'

export const BookContext=createContext()

const BookContextProvider=(props)=>{
    const [books,setBook]=useState([
        {title:'Name of The wind',author:'Ali',id:1},
        {title:'Name of The wind',author:'Ali',id:2},
        {title:'Name of The wind',author:'Ali',id:3},
        
    ])
    const addBook=(title,author,id)=>{
        setBook([...books,{title,author,id}])
    }
    const removeBook=(id)=>{
            setBook(books.filter(book=>book.id!==id))
    }
    return(
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider