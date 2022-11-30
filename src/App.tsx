import {useState} from 'react'
import Hero from './components/Hero'
import Feature from './components/Feature'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Hero/>
            <Feature/>
        </div>
    )
}

export default App
