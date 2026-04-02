const fetchMovies = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${da679b1021912724c1ed572201e2864c}`);
  const data = await res.json();
  return data.results;
};
