import { useNavigate } from 'react-router-dom'
import { IBook } from '../../lib/types'
import styles from './Book.module.css'
import { FaStar } from "react-icons/fa";

interface IProps {
    book: IBook
}

export const Book = ({ book }: IProps) => {
    const navigate = useNavigate()
    return (
        <>
            <div className={`${styles.block}`} onClick={() => navigate(`/details/${book.id}`)}>
                <div className={styles.imgBlock}>
                    <img src={book.photo} className={styles.img} />
                </div>
                <div className={styles.info}>
                    <span className={styles.title}>{book.title}</span>
                    <span className={styles.author}>{book.author}</span>
                </div>
                <div className={styles.rating}>
                    {
                        book.rating ? (new Array(book.rating)).fill(null).map((star,i) => <FaStar key={i}/>) : ""
                    }
                </div>
            </div>
        </>
    )
}
