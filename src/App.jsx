import React                                      from 'react'
import Home                                       from './paginas/Home'
import Sobre                                      from './paginas/Sobre'
import { DefaultPage }                            from './paginas/DefaultPage'
import { Cabecalho }                              from './components/Cabecalho'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Post }                                   from './paginas/Post'
import './assets/css/base/base.css'
import { Categoria }                              from './paginas/Categoria'


function App(){

    return (
        <Router>
            <Cabecalho />
            <Switch>
                <Route exact path={ '/' }>
                    <Home />
                </Route>
                <Route path={ '/sobre' }>
                    <Sobre />
                </Route>
                <Route path={ '/categoria/:id' }>
                    <Categoria />
                </Route>
                <Route path={ '/posts/:id' }>
                    <Post />
                </Route>
                <Route>
                    <DefaultPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
