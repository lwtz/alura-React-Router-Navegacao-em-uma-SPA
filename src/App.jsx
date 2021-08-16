import React from 'react'
import './assets/css/base/base.css'
import Home  from './paginas/Home'
import Sobre from './paginas/Sobre'


function App(){
    const router = () => {
        const lacation = window.location.pathname
        if( lacation === '/sobre' ){
            return <Sobre />
        } else {
            return <Home />
        }

    }

    return (
        <>
            { router() }
        </>
    )
}

export default App
