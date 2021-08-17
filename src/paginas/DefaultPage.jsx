// import React from 'react'

import imagem from '../assets/img/doguito404.svg'
import '../assets/css/404.css'


// const DefaultPage = () => {
export function DefaultPage(){
    return (
        <>
            <main className="container flex flex--centro flex--coluna">
                <img
                    className="doguito-imagem"
                    src={ imagem }
                    alt="Dog" />
                <p className="naoencontrado-texto">Página não encontrada</p>
            </main>
        </>
    )
}

// export default DefaultPage
