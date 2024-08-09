const fakeFilms = [
  { id: 1, title: 'Inception', description: 'A thief who steals corporate secrets through the use of dream-sharing technology.A thief who steals corporate secrets through the use of dream-sharing technology.A thief who steals corporate secrets through the use of dream-sharing technology.', image: 'https://images3.alphacoders.com/134/thumb-1920-1349177.jpg', genre: 'Bilim Kurgu', year: '2010 - 2019', duration: 'Orta (90 - 150 dk)', imdb: '8.8',videoUrl: 'https://www.youtube.com/embed/8hP9D6kZseM',director: 'Christopher Nolan',
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'], },
  { id: 2, title: 'The Godfather', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', image: 'https://media.gettyimages.com/id/1423176386/photo/italian-actor-salvatore-corsitto-kisses-the-hand-of-american-actor-marlon-brando-in-a-scene.jpg?s=612x612&w=0&k=20&c=M1sXszCIfMDB8kb4FEBntnjwNY31PYy90CXmKFjXio0=', genre: 'Dram', year: '1972', duration: 'Uzun (150+ dk)', imdb: '9.2', videoUrl: 'https://www.youtube.com/embed/UaVTIH8mujA',director: 'Christopher Nolan',
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'], },
  { id: 3, title: 'The Dark Knight', description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', image: 'images/image3.jpg', genre: 'Aksiyon', year: '2008', duration: 'Uzun (150+ dk)', imdb: '9.0' },
  { id: 4, title: 'Pulp Fiction', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.', image: 'images/image4.jpg', genre: 'Komedi', year: '1994', duration: 'Uzun (150+ dk)', imdb: '8.9' },
  { id: 5, title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', image: 'images/image5.jpg', genre: 'Dram', year: '1994', duration: 'Uzun (150+ dk)', imdb: '9.3' },
  { id: 6, title: 'Fight Club', description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.', image: 'images/image6.jpg', genre: 'Gerilim', year: '1999', duration: 'Orta (90 - 150 dk)', imdb: '8.8' },
  { id: 7, title: 'Forrest Gump', description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man.', image: 'images/image7.jpg', genre: 'Dram', year: '1994', duration: 'Uzun (150+ dk)', imdb: '8.8' },
  { id: 8, title: 'Interstellar', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', image: 'images/image8.jpg', genre: 'Bilim Kurgu', year: '2014', duration: 'Uzun (150+ dk)', imdb: '8.6' },
  { id: 9, title: 'The Matrix', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', image: 'images/image9.jpg', genre: 'Aksiyon', year: '1999', duration: 'Orta (90 - 150 dk)', imdb: '8.7' },
  { id: 10, title: 'The Social Network', description: 'The story of the founding of Facebook and the legal battles that followed.', image: 'images/image10.jpg', genre: 'Dram', year: '2010', duration: 'Orta (90 - 150 dk)', imdb: '7.8' },
  { id: 11, title: 'The Lion King', description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', image: 'images/image11.jpg', genre: 'Animasyon', year: '1994', duration: 'Orta (90 - 150 dk)', imdb: '8.5' },
  { id: 12, title: 'Spirited Away', description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.', image: 'images/image12.jpg', genre: 'Animasyon', year: '2001', duration: 'Orta (90 - 150 dk)', imdb: '8.6' },  { id: 13, title: 'Gladiator', description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', image: 'images/image1.jpg', genre: 'Aksiyon', year: '2000', duration: 'Uzun (150+ dk)', imdb: '8.5' },
  { id: 14, title: 'Parasite', description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.', image: 'images/image2.jpg', genre: 'Gerilim', year: '2019', duration: 'Orta (90 - 150 dk)', imdb: '8.6' },
  { id: 15, title: 'The Silence of the Lambs', description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to catch another serial killer.', image: 'images/image3.jpg', genre: 'Gerilim', year: '1991', duration: 'Orta (90 - 150 dk)', imdb: '8.6' },
  { id: 16, title: 'Avengers: Endgame', description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos\' actions and restore balance to the universe.', image: 'images/image4.jpg', genre: 'Aksiyon', year: '2019', duration: 'Uzun (150+ dk)', imdb: '8.4' },
  { id: 17, title: 'Whiplash', description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.', image: 'images/image5.jpg', genre: 'Dram', year: '2014', duration: 'Orta (90 - 150 dk)', imdb: '8.5' },
  { id: 18, title: 'The Lord of the Rings: The Return of the King', description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.', image: 'images/image6.jpg', genre: 'Fantastik', year: '2003', duration: 'Uzun (150+ dk)', imdb: '9.0' },
  { id: 19, title: 'The Wolf of Wall Street', description: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.', image: 'images/image7.jpg', genre: 'Komedi', year: '2013', duration: 'Uzun (150+ dk)', imdb: '8.2' },
  { id: 20, title: 'Toy Story', description: 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\'s room.', image: 'images/image8.jpg', genre: 'Animasyon', year: '1995', duration: 'Orta (90 - 150 dk)', imdb: '8.3' },
  { id: 21, title: 'Joker', description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.', image: 'images/image9.jpg', genre: 'Dram', year: '2019', duration: 'Orta (90 - 150 dk)', imdb: '8.5' },
  { id: 22, title: 'The Truman Show', description: 'An insurance salesman discovers his whole life is actually a reality TV show.', image: 'images/image10.jpg', genre: 'Komedi', year: '1998', duration: 'Orta (90 - 150 dk)', imdb: '8.1' },
  { id: 23, title: 'Saving Private Ryan', description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.', image: 'images/image11.jpg', genre: 'Savaş', year: '1998', duration: 'Uzun (150+ dk)', imdb: '8.6' },
  { id: 24, title: 'Goodfellas', description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.', image: 'images/image12.jpg', genre: 'Suç', year: '1990', duration: 'Uzun (150+ dk)', imdb: '8.7' },
];

export default fakeFilms;
