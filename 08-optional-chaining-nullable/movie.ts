type MovieSmall = {
  title: string;
};

const moviesSmall: MovieSmall[] = [
  { title: "Movie 1" },
  { title: "Movie 2" },
  { title: "Movie 3" },
  { title: "Movie 4" },
  { title: "Movie 5" },
];

type Person = {
  name: string;
};

type Director = Person;

type Actor = Director;

type MoviesFull = {
  title: String;
  director: Director;
  actors: Actor[];
};

const moviesFull: MoviesFull[] = [
  {
    title: "Movie 1",
    director: { name: "Ridley Scott" },
    actors: [{ name: "Actor one" }, { name: "Actor two" }],
  },
  {
    title: "Movie 2",
    director: { name: "Ridley Scott" },
    actors: [{ name: "Actor one" }, { name: "Actor two" }],
  },
  {
    title: "Movie 3",
    director: { name: "Ridley Scott" },
    actors: [{ name: "Actor one" }, { name: "Actor two" }],
  },
  {
    title: "Movie 4",
    director: { name: "Ridley Scott" },
    actors: [{ name: "Actor one" }],
  },
  {
    title: "Movie 5",
    director: { name: "Ridley Scott" },
    actors: [{ name: "Actor one" }],
  },
];

// Recomendation use :any as a movie type
function getDirector(movie) {
  return movie.director?.name ?? "Unknown Director";
}

// Recomendation use :any as a movie type
function getActors(movie: any) {
  return movie.actors?.name ?? "Unknown actors";
}

// Recomendation use :any as a movie type
function getLeadingActor(movie: any) {
  return movie.actor?.[0]?.name ?? "Unknown actor";
}

// Recomendation use :any as a movie type
function getSecondaryActor(movie: any) {
  return movie.actor?.[1]?.name ?? "Unknown actor";
}

// Recomendation use :any as a movie type
function logMovie(movie: any) {
  console.log("Director:", getDirector(movie));
  console.log("Actors:", getActors(movie));
  console.log("Lead actor", getLeadingActor(movie));
  console.log("Second actor", getSecondaryActor(movie));
}

// Recomendation use :any as a movie type
function logSmallMovies(movie: any) {
  logMovie(movie);
}

// Recomendation use :any as a movie type
function logFullMovies(movie: any) {
  logMovie(movie);
}

moviesSmall.forEach((movie) => {
  console.group("Small movies");
  logSmallMovies(movie);
  console.groupEnd();
});

moviesFull.forEach((movie) => {
  console.group("Full movies");
  logFullMovies(movie);
  console.groupEnd();
});
