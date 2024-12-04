import { Book } from "../../components/Book/Book"
import { useGetBooksQuery } from "../../lib/api"
import styles from "./Books.module.css"


export const Books = () => {
    const {data} = useGetBooksQuery()

  return (
    <>
        <div className={`${styles.container}`}>
            {
                data && data.map(book => <Book key={book.id} book={book}/>)
            }
        </div>
    </>
  )
}
