import { createContext, useReducer  } from "react";
import { Book } from "../util/types";
import { bookReducer } from "./bookReducer";
import { bookInitialState } from "../util/const";

type BookContextProps = {
    books: Book[],
    addBook: (book: Book) => void,
    removeBook: (book: Book) => void,
    clearReadingList: () => void,
    setBooks: (books: Book[]) => void
}

export const BookContext = createContext({} as BookContextProps)

export const BookProvider = ({children}: {children: React.ReactNode}) => {

    const [state, dispach] = useReducer(bookReducer, bookInitialState || { books: localStorage.getItem('readingBooks') })

    const addBook = (book: Book) => {
        dispach({type: 'ADD_BOOK', payload: book})
    }

    const removeBook = (book: Book) => {
        dispach({type: 'REMOVE_BOOK', payload: book})
    }

    const clearReadingList = () => {
        dispach({type: 'CLEAR_BOOKS'})
    }

    const setBooks = (books: Book[]) => {
        dispach({ type: 'SET_BOOKS', playload: books })
    }

    return (
        <BookContext.Provider value={{books: state.books, addBook, removeBook, clearReadingList, setBooks}}>
            {children}
        </BookContext.Provider>
    )
}