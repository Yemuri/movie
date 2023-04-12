import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import api from '../../services/api'


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

            setFilme(response.data.results)
        }

        loadDetalhes()
    }, [filme])


    console.log(id)


    return (
        <h1>Sobre o filme {id}</h1>
    )
}