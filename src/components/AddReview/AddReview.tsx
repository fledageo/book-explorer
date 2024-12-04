import { FieldValues, useForm } from "react-hook-form"
import styles from "./AddReview.module.css"
import { IBook, IUserReview } from "../../lib/types"
import { useUpdateBookMutation } from "../../lib/api"

interface IProps{
    book:IBook
}

export const AddReview = ({book}:IProps) => {
    const { register, handleSubmit,reset } = useForm()
    const [updateBook] = useUpdateBookMutation()

    const handleAddReview = (data:FieldValues) => {
        const temp = {...book} as IBook
        temp.reviews = [...temp.reviews,data as IUserReview]
        temp.rating = Math.round(temp.reviews.reduce((acc,elm) => acc + +elm.rate,0) / temp.reviews.length)
        
        
        updateBook({id:book.id,data:temp})
        .then(res => {
            reset()
        })
    }

    return (
        <>
            <div className={`box`}>
                <div className={styles.wrapper}>
                    <p className="subtitle">Rate and leave a review</p>

                    <form onSubmit={handleSubmit((data) => handleAddReview(data))} className={styles.form}>
                        <input
                            className={`input is-success mt-4`}
                            type="text"
                            placeholder="Email"
                            {...register("email", {
                                required: "please fill all required fields"
                            })}
                        />
                        <input
                            className={`input is-success mt-4`}
                            type="text"
                            placeholder="Text"
                            {...register("text", {
                                required: "please fill all required fields"
                            })}
                        />

                        <div className="select is-success mt-4">
                            <select {...register("rate")}>
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>

                        <button className="button is-success mt-4">Leave a review</button>
                    </form>
                </div>
            </div>
        </>
    )
}
