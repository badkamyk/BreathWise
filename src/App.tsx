import {useState} from 'react'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Steps from './components/Steps'
import './App.css'
import {Outlet, RouterProvider} from "@tanstack/react-router";
import {router} from "./router";


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <RouterProvider router={router}>
                <div className="min-h-full">
                    {/*<Hero/>*/}
                    {/*<Feature/>*/}
                    {/*<Steps/>*/}
                    {/*<Footer/>*/}
                    <Outlet/>
                </div>
            </RouterProvider>
        </>
    )
}

export default App
