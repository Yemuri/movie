import { useState, useEffect } from "react"
import api from "../../services/api"
import '../Filmes/filmes.css'



export default function SeriesPopulares() {

    const [seriesPopulares, setseriesPopulares] = useState([''])

    useEffect(() => {
        async function loadSeriesPopulares() {
            const response = await api.get('/tv/top_rated', {
                params: {
                    api_key: 'bb906177838fa05f0d61f28127cd947e',
                    language: 'pt-BR'
                }
            })
            setseriesPopulares(response.data.results)
        }

        loadSeriesPopulares()
    }, [seriesPopulares])

    console.log(seriesPopulares)

    return (
        <div>
            <h1>Séries + Populares</h1>
            <h3>Para mais informações, passe o mouse no card.</h3>
            <div className="grid-container">
                {seriesPopulares.map((seriesPop) => {
                    return (
                        <article>
                            <strong>{seriesPop.name} </strong>
                            <strong>Nota: {seriesPop.vote_average}</strong>
                            <div className="aparecendo">
                                <img src={`https://image.tmdb.org/t/p/w300/${seriesPop.poster_path}`} alt="" />
                            </div>
                            <div className="oculto, vira">
                                <h2>{seriesPop.overview}</h2>
                            </div>
                        </article>
                    )

                })}
            </div>
        </div>
    )
}