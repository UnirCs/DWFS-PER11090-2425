export interface Movie {
  title: string;
  image: string;
  sinopsis: number;
  duration: number;
  genre: string;
  score: number;
}

export function listOfMovies(): Movie[] {

  console.log('Getting list of movies...')

  return [{
    title: 'Hey!'
  }, {
    title: 'Hey1!'
  }, {
    title: 'Hey2!'
  }, {
    title: 'Hey3!'
  }]
}
