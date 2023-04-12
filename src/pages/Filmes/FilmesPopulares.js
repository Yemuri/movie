import { useState, useEffect } from 'react'
import api from '../../services/api'
import './filmes.css'

export default function FilmesPopulares() {

    const [FilmesPopulares, setFilmesPopulares] = useState([''])

    useEffect(() => {
        async function loadFilmesPopulares() {
            const response = await api.get('/movie/popular', {
                params: {
                    api_key: 'bb906177838fa05f0d61f28127cd947e',
                    language: 'pt-BR'
                }

            })

            setFilmesPopulares(response.data.results)
        }

        loadFilmesPopulares()
    }, [FilmesPopulares])

    console.log(FilmesPopulares)

    return (
        <div>
            <h1>Filmes + Populares</h1>
            <div className='grid-container'>
                {FilmesPopulares.map((FilmesPopulares) => {
                    return (
                        <article>
                            <strong>{FilmesPopulares.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/w300/${FilmesPopulares.poster_path} `} alt="" />
                        </article>

                    )
                })}
            </div>
        </div>
    )
}