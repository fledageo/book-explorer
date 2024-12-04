import { FieldValues, useForm } from 'react-hook-form'
import styles from './AddBook.module.css'
import { useAddBookMutation } from '../../lib/api'
import { AddBookData } from '../../lib/types'
import { useNavigate } from 'react-router-dom'

export const AddBook = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [addBook] = useAddBookMutation()
    const navigate = useNavigate()

    const handleAdd =(data:FieldValues) => {
        data.rating = 0
        data.reviews = []
        addBook(data as AddBookData)
        .then(res => {
            console.log(res)
            navigate("/books")
        })
    }

    return (
        <>
            <div className={styles.container}>
                <div className={`box ${styles.wrapper}`}>
                    <form onSubmit={handleSubmit((data) => handleAdd(data))} className={styles.form}>
                        <p className='subtitle'>Add Book</p>
                        <input
                            className={`input is-success mt-4`}
                            type="text"
                            placeholder="Title"
                            {...register("title", { required: "please fill all required fields" })}
                        />
                        <input
                            className={`input is-success mt-4`}
                            type="text"
                            placeholder="Author"
                            {...register("author", { required: "please fill all required fields" })}
                        />
                        <input
                            className={`input is-success mt-4`}
                            type="text"
                            placeholder="Enter Image URL"
                            {...register("photo", { required: "please fill all required fields" })}
                        />
                        <button className={`button is-success mt-4`}>Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}
