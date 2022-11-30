import {useState} from 'react'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Footer from './components/Footer'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen">
            <Hero/>
            <Feature/>
            <Footer/>
        </div>
    )
}

export default App
