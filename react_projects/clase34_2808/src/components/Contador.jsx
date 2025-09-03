import React, {useState, useEffect} from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0)

  return (
    <div>
        <h2 className='text-4xl font-bold text-blue-500'>Contador</h2>
        <button
            onClick={() => setContador(contador + 1)}
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
        >Incrementar</button>
    </div>
  )
}

export default Contador