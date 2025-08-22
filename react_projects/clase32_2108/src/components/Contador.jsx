import { useState } from "react"

const Contador = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
        console.log(count)
    }

    return (
        <div>
            <h1>Contador</h1>
            <p style={{fontSize: '3rem', color:"goldenrod"}}>{count}</p>
            <button onClick={handleClick}>Sumar al contador</button>
        </div>
    )
}

export default Contador