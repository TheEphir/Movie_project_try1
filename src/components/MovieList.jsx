import { Movie } from './Movie';

function MovieList(props) {
  const { movieList = [] } = props;

  return (
    <div className='movieList'>
      {movieList.length ? (
        movieList.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}
export { MovieList };
