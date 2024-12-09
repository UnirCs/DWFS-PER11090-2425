export interface Movie {
  title: string;
  image: string;
  synopsis: string;
  duration: number;
  genre: string;
  score: number;
}

export function listOfMovies(): Movie[] {

  console.log('Getting list of movies...')

  // ToDo: get data from https://www.themoviedb.org/ in the Tema 6

  return [
    {
      title: 'The Lost Horizon',
      image: 'https://example.com/lost-horizon.jpg',
      synopsis: 'A breathtaking journey through a mystical valley filled with wonders and secrets.',
      duration: 125,
      genre: 'Adventure',
      score: 8.5
    },
    {
      title: 'Cybernetic Dreams',
      image: 'https://example.com/cybernetic-dreams.jpg',
      synopsis: 'In a world dominated by AI, one hacker fights for humanity\'s survival.',
      duration: 140,
      genre: 'Sci-Fi',
      score: 9.2
    },
    {
      title: 'Love in Paris',
      image: 'https://example.com/love-in-paris.jpg',
      synopsis: 'A timeless romance set in the picturesque streets of Paris.',
      duration: 115,
      genre: 'Romance',
      score: 7.8
    },
    {
      title: 'Battle of the Shadows',
      image: 'https://example.com/battle-of-shadows.jpg',
      synopsis: 'A gripping tale of courage and betrayal in a world on the brink of war.',
      duration: 155,
      genre: 'Action',
      score: 8.0
    },
    {
      title: 'The Haunting Silence',
      image: 'https://example.com/haunting-silence.jpg',
      synopsis: 'An eerie exploration of a small town hiding dark secrets.',
      duration: 100,
      genre: 'Horror',
      score: 7.5
    }
  ]
}
