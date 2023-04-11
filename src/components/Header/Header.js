import { Link } from 'react-router-dom'
import './style.css'


export default function Header() {
    return (
        <div className="logoeTit">
            <Link to='/'>Início</Link>
            <div className='dropdown'>
                <button className='dropbtn'>Filmes</button>
                <div className='dropdown-content'>
                    <Link to='/FilmesPopulares'>Populares</Link>
                    <Link to='/FilmesEmCartaz'>Em Cartaz</Link>
                    <Link to='/FilmesEstreias'>Estreias</Link>
                </div>
            </div>
            <div className='dropdown'>
                <button className='dropbtn'>Séries</button>
                <div className='dropdown-content'>
                    <Link to='/SeriesPopulares'>Populares</Link>
                    <Link to='/SeriesEmCartaz'>Em Cartaz</Link>
                    <Link to='/SeriesEstreias'>Estreias</Link>
                </div>
            </div>
            <Link to='/Contato'>Contato</Link>


        </div >
    )
}