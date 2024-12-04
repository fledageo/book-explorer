import { useParams } from 'react-router-dom'
import styles from "./Details.module.css"
import { useGetBookByIdQuery } from '../../lib/api'
import { skipToken } from '@reduxjs/toolkit/query'
import { FaStar } from "react-icons/fa";
import { AddReview } from '../../components/AddReview/AddReview';

export const Details = () => {
  const { id } = useParams()
  const { data } = useGetBookByIdQuery(id ?? skipToken)


  return (
    <>
      {
        data &&
        <div className={styles.container}>
          <div className={`${styles.wrapper}`}>
            <div className={styles.infoWrapper}>
              <div className={styles.imgBlock}>
                <img src={data.photo} className={styles.img} />
              </div>

              <div className={styles.infoBlock}>
                <p className={styles.title}>{data.title}</p>
                <p className={styles.author}>{data.author}</p>
                {
                  data.rating ? (new Array(data.rating)).fill(null).map((star,i) => <FaStar key={i}/>) : ""
                }

                <div className={styles.reviews}>
                  {
                    data.reviews.length ? data.reviews.map((review, i) => <div key={i} className={`box ${styles.review}`}>
                      <p className={styles.email}>{review.email}</p>
                      <p className={styles.text}>{review.text}</p>
                    </div>) : ""
                  }
                </div>
              </div>
            </div>

            <div className={styles.actionWrapper}>
                <AddReview book={data}/>
            </div>
          </div>
        </div>
      }
    </>
  )
}
