import { Container, MopvieList, Movie } from "./style";


const movies = [
  {
    id: 1,
    title: "Harry Potter",
    image_url: "https://upload.wikimedia.org/wikipedia/pt/b/b0/Harry_Potter_Half_Blood_Prince_2009.jpg"
  },
  {
    id: 2,
    title: "Batman",
    image_url: "https://upload.wikimedia.org/wikipedia/pt/b/b0/Harry_Potter_Half_Blood_Prince_2009.jpg"
  },
  {
    id: 3,
    title: "Harry Potter",
    image_url: "https://upload.wikimedia.org/wikipedia/pt/b/b0/Harry_Potter_Half_Blood_Prince_2009.jpg"
  },
]



function Home() {
  return (
    <Container>
      <h1>Movies</h1>
      <MopvieList>

      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
          <a href="https://google.com"><img src={movie.image_url} alt={movie.title}></img></a>
          <span>{movie.title}</span>
        </Movie>
        )
      })}


     

      </MopvieList>
    </Container>
  );
}

export default Home;