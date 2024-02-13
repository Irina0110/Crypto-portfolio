import './App.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "@/pages/MainPage.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <MainPage/>
            )
        },
    ]
);

export default function App() {
    return (
        <RouterProvider router={router}/>
    )
}
