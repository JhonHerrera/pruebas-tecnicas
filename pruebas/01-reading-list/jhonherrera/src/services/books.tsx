import { useEffect, useState } from "react"
import { Book } from "../util/types"
import { v4 as uuidv4 } from "uuid"
import books from "../data/books.json"

export const useBooks = () => {

    const [data, setData] = useState<Book[]>([])

    useEffect(() => {

        const mockBooks: Book[] = books.library.map(({ book }) => { 
            return { ...book, id: uuidv4() }
        })

        setData(mockBooks)
    }, [])

    return { data }

}
