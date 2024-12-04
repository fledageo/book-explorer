import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Books } from './features/Books/Books'
import { Details } from './features/Details/Details'
import { AddBook } from './features/AddBook/AddBook'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"books",
        element:<Books/>
      },
      {
        path:"addBook",
        element:<AddBook/>
      },
      {
        path:"details/:id",
        element:<Details/>
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
export default App