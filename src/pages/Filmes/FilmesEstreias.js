import { useState, useEffect } from 'react'
import api from '../../services/api'
import './filmes.css'


export default function FilmesEstreias() {


    const [filmesEstreias, setfilmesEstreias] = useState([''])

    useEffect(() => {
        async function loadFilmesEstreias() {
            const response = await api.get('/movie/upcoming', {
                params: {
                    api_key: 'bb906177838fa05f0d61f28127cd947e',
                    language: 'pt-BR'
                }

            })

            setfilmesEstreias(response.data.results)
        }

        loadFilmesEstreias()
    }, [filmesEstreias])

    console.log(filmesEstreias)

    return (
        <div>
            <h1>As Estreias + Esperadas:</h1>
            <div className='grid-container'>
                {filmesEstreias.map((filmesEstreias) => {
                    return (
                        <article>
                            <strong>{filmesEstreias.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/w300/${filmesEstreias.poster_path}`} alt="" />
                        </article>

                    )
                })}
            </div>
        </div>
    )
}
