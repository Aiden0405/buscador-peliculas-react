import { useState } from "react"

export const BuscadorPeliculas = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = 'dc62542c1c41ac9f649bbaa6ce71a076'

    const [busqueda, setBusqueda] = useState('')
    const [peliculas, setPeliculas] = useState([])

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }

    const fetchPeliculas = async () => {
        try{
            
            const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
            const data = await response.json()
            // setPeliculas(data)
            console.log(data.results)
            setPeliculas(data.results)
        }catch(error){
        console.error('Ha ocurrido un error: ', error)
        }
    }


  return (
    <div className="container">
        <h1 className="tittle">Buscador de Peliculas</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Escribe un pelicula"
            value={busqueda}
            onChange={handleInputChange}
            />
            <button type='submit' className="search-button">Buscar</button>
        </form>

        <div className="movie-list">
            {peliculas.map((pelicula) => (
                <div key={pelicula.id} className="movie-card">
                    <a href={`https://en.wikipedia.org/wiki/${pelicula.title}`} target="_blank" rel="noopener noreferrer">
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                    <h2>{pelicula.title}</h2>
                    <p>{pelicula.overview}</p>
                    </a>
                </div>
            ))}

        </div>

    </div>
  )
}
