import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Container } from "../Home/style";



function Details() {

  const { id } = useParams();

  const { movie, setMovies } = useState({});
  const image_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`)

      .then(response => response.json())
      .then(data => {

        const { title, poster_path, overview, release_date, genres } = data;

        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
          genero: genres

        };

        setMovies(movie);

      });
  }, [id]);

  return (
    <Container>
        <div className="movie">
          <img src={movie.image} alt={movie.title}></img>
          <div className="details">
            <h1>{movie.title}</h1>
            <span>{movie.genero}</span>
            <span>Sinopse: {movie.sinopse}</span>
            <span className="realese-date">Release date: {movie.releaseDate}</span>
            <button>Go Back</button>
          </div>
        </div>
    </Container>
  );
}

export default Details;