import { Book } from "../util/types";
import './book.css'

export default function Book({ book }: { book: Book }) {
    return (
        <>
            <div className="book">
                <img className="cover" src={book.cover} alt={book.title} />
                <div className="title">
                    <span> {book.title}  </span>
                </div>
                <div className="middle"> 
                    <div> Añadir a la Lista de Lectura </div>
                </div>
            </div>
        </>
    )
}