import { useState, useEffect } from "react";

const AutoCounter = () => {
    const [ counter, setCounter] = useState(0); 


    // TODO: Este useEffect se Ejecuta en cada render
    useEffect(()=>{
        console.log("Efecto ejecutando")
    })
    

    return <div>
        <h2>Contador: {counter}</h2>
        <button onClick={()=>setCounter(counter+1)}
        className="bg-amber-50 text-gray-500 px-4 rounded-2xl hover:bg-amber-200 hover:cursor-pointer"    
        >Incrementar</button>
    </div>
}
export default AutoCounter;