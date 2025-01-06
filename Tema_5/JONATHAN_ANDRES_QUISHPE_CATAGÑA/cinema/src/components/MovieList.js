import Movie from './Movie';
import './MovieList.css';

const movies = [
  {
    title: 'The Fellowship of the Ring',
    image: 'https://cdn.britannica.com/36/201736-050-8716478A/Ian-McKellen-Gandalf-Elijah-Wood-Frodo-The.jpg',
    description: 'An epic adventure of good vs. evil.',
    duration: '2h 58min',
    gender: 'Action, Adventure, Drama',
    score: 8.8
  },
  {
    title: 'The Fellowship of the Ring',
    image: 'https://cdn.britannica.com/36/201736-050-8716478A/Ian-McKellen-Gandalf-Elijah-Wood-Frodo-The.jpg',
    description: 'An epic adventure of good vs. evil.',
    duration: '2h 58min',
    gender: 'Action, Adventure, Drama',
    score: 8.8
  },
  {
    title: 'The Fellowship of the Ring',
    image: 'https://cdn.britannica.com/36/201736-050-8716478A/Ian-McKellen-Gandalf-Elijah-Wood-Frodo-The.jpg',
    description: 'An epic adventure of good vs. evil.',
    duration: '2h 58min',
    gender: 'Action, Adventure, Drama',
    score: 8.8
  },
];

const MovieList = () => {
  return (
    <div className='movie-list'>
      {
        movies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))
      }
    </div>
  )
}

export default MovieList;