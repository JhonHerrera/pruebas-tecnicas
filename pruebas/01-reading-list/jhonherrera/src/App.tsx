import { useBooks } from './services/books'
import Book from './components/book'
import './App.css'

function App() {
  const { data } = useBooks()

  return (
    <>
      <h1> Lista de Lectura </h1>
      <div className="cont-books">
        {
          data.map(book => 
            <Book key={book.id} book={book}/>
          )
        }
      </div>
    </>
  )
}

export default App
