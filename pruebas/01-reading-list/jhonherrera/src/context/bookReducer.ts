import { bookInitialState } from "../util/const";
import { Book } from "../util/types";

type BookAction =
    | { type: "ADD_BOOK"; payload: Book }
    | { type: "REMOVE_BOOK"; payload: Book }
    | { type: "CLEAR_BOOKS"; }
    | { type: "SET_BOOKS"; playload: Book[] }

export const bookReducer = (state: { books: Book[] }, action: BookAction) => {
    try {
        switch (action.type) {
            case "ADD_BOOK":
                return {
                    ...state,
                    books: [...state.books, action.payload],
                };
            case "REMOVE_BOOK":
                return {
                    ...state,
                    books: state.books.filter((book: Book) => book.id !== action.payload.id),
                };
            case "CLEAR_BOOKS":
                return bookInitialState
            case "SET_BOOKS":
                return {
                    ...state,
                    books: action.playload
                }
            default:
                return state;
        }
    } finally {
        console.log("save reading list books", state.books)
        localStorage.setItem('readingBooks', JSON.stringify(state.books))
    }
    
}