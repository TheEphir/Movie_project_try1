import React from 'react';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Prealoader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movieList: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ movieList: data.Search, loading: false })
      );
  }

  SearchFunc = (str, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ movieList: data.Search, loading: false })
      );
  };

  render() {
    const { movieList, loading } = this.state;

    return (
      <main className='container content'>
        <Search SearchFunc={this.SearchFunc} />
        {loading ? <Preloader /> : <MovieList movieList={movieList} />}
      </main>
    );
  }
}
export { Main };
