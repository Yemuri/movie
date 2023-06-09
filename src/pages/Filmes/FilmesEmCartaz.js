import { useState, useEffect } from 'react'
import api from '../../services/api'
import './filmes.css'
import { Link } from 'react-router-dom'

export default function FilmesEmCartaz() {


    const [filmes, setFilmes] = useState([''])

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: 'bb906177838fa05f0d61f28127cd947e',
                    language: 'pt-BR'
                }
            })

            setFilmes(response.data.results)
        }

        loadFilmes()
    }, [])


    console.log(filmes)


    return (
        <div>
            <h1>Os Filmes em Cartaz:</h1>

            <div className='grid-container'>
                {filmes.map((filme) => {
                    return (
                        <article>
                            <strong>{filme.title}</strong>
                            <strong>{filme.id}</strong>
                            <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path} `} alt="" />
                            <Link to={`/Detalhes/${filme.id}`} className='details'>Detalhes</Link>



                        </article>

                    )

                })}
            </div>
        </div>

    )
}