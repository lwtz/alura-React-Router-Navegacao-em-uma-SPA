import { useEffect, useState }  from 'react'
import { busca }                 from '../api/api'
import '../assets/css/post.css'
import { useParams, useHistory } from 'react-router-dom'


export const Post = () => {
    let hist = useHistory()
    const {id} = useParams()
    const [ post, setPost ] = useState({})

    useEffect(() => {
        busca(`/posts/${ id }`, setPost)
            .catch(
                () => {
                    hist.push(`/404`)
                })
    }, [ id ])

    return (
        <main className={ 'container flex flex--centro' }>
            <article className={ 'cartao post' }>
                <h2 className={ 'cartao__titulo' }>{ post.title }</h2>
                <p className={ 'carta__texto' }>{ post.body }</p>

            </article>
        </main>
    )
}
