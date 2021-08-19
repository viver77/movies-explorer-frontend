const searchFilter = (searchQueries, movies) => {
  const { search = '', shortfilm = false } = searchQueries;

  const filterKeyword = (movie) => {
    return JSON.stringify(movie).toLowerCase().includes(search.toLowerCase())
  }

  const filterShortfilm = (movie) => {
    return movie.duration <= 40;
  }

  if (shortfilm) {
    return movies.filter(filterKeyword).filter(filterShortfilm);
  } else {
    return movies.filter(filterKeyword);
  }
}

export default searchFilter;
