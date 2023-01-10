import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home'
import Favourite from '../Pages/Favourite'

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/favourite",
        element:<Favourite/>
    }
])