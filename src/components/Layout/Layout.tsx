import styles from "./Layout.module.css"
import { Outlet } from "react-router-dom"
export const Layout = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <a href="/books" className={`${styles.navItem} button is-success`}>Books</a>
          <a href="/addBook" className={`${styles.navItem} button is-success`}>Add Book</a>
        </div>
      </div>
      <Outlet/>
    </>
  )
}
