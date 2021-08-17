import { ListaPost }                from '../components/ListaPost'
import { useParams } from 'react-router-dom'


export function Subcategoria(){
    const {subcategoria} = useParams()
    // const {path} = useRouteMatch()
    return (
        <ListaPost url={ `/posts?subcategoria=${ subcategoria }` } />

    )
}
