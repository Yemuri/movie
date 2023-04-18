import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import api from '../../services/api'
import './detalhes.css'
import moment from 'moment'


export default function Detalhes() {
    const { id } = useParams()
    const [filme, setFilme] = useState({})

    useEffect(() => {
        async function loadDetalhes() {
            const response = await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'bb906177838fa05f0d61f28127cd947e',
                    language: 'pt-BR'

                }
            })

            setFilme(response.data)
        }


        loadDetalhes()
    }, [])


    return (
        <div>
            <h1>Sobre o filme:</h1>
            <h2>Filme: {filme.title}. Nota: {Number(filme.vote_average).toFixed(2)}</h2>
            <h3>Data de lançamento: {moment(new Date(`${filme.release_date}`)).format('DD-MM-YYYY')}</h3>
            <div>
                <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path} `} alt="" className='imginfo' />
                <h2 className='text'>{filme.overview}</h2>
            </div>
        </div >
    )
}