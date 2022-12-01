import {useState} from 'react'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Steps from './components/Steps'
import './App.css'
import {Outlet, RouterProvider} from "@tanstack/react-router";
import {router} from "./router";
import Nav from "./components/Nav";


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <RouterProvider router={router}>
                <div className="min-h-full">
                    {/*<Hero/>*/}
                    {/*<Feature/>*/}
                    {/*<Steps/>*/}
                    <Nav />
                    <Outlet/>
                    <Footer/>
                </div>
            </RouterProvider>
        </>
    )
}

export default App
