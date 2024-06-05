// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTNhYzgxMjM0NDMwZjE0YjQ4MjQ1OWIxNzA4N2Y1ZSIsInN1YiI6IjY0MmM3MWVlYzBhMzA4MDA3NzRmMzk5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O_lMcdb3vmdE6CI79jxUcX81avN6J39Y3IxxTPYzAbU'
//   }
// };

// const search = (query) =>
//   fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
//   .then(response => response.json())
//   .then(response => response)
//   .catch(err => console.error(err));

const search = (query) =>
  fetch(`http://www.omdbapi.com/?t=${query}&apikey=4621997e`)
  .then(response => response.json())
  .then(response => response)
  .catch(err => console.error(err));

// Export an object with a "search" method that searches the Giphy API for the passed query
export default search;
