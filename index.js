
const { displayCatalog, addMovie, updateMovie, deleteMovie, searchMovies, filterMovies, fetchMoviesFromAPI } = require('./movieCatalog');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMenu() {
  console.log(`
Movie Catalog CLI
-----------------

1. Display Movie Catalog
2. Add New Movie
3. Update Movie Details
4. Delete Movie
5. Search Movies
6. Filter Movies
7. Fetch Movies from API
8. Exit
`);

rl.question('Enter your choice: ', handleMenuChoice);
}

function handleMenuChoice(ch) {
  switch (ch) {
    case '1':
      displayCatalog();
      break;
    case '2':
      rl.question('Enter movie title: ', (title) => {
        rl.question('Enter movie director: ', (director) => {
          rl.question('Enter release year: ', (releaseYear) => {
            rl.question('Enter genre: ', (genre) => {
              addMovie(title, director, releaseYear, genre);
              displayMenu();
            });
          });
        });
      });
      break;
    case '3':
      rl.question('Enter the movie title to update: ', (title) => {
        rl.question('Enter the new title: ', (newTitle) => {
          rl.question('Enter the new director: ', (newDirector) => {
            rl.question('Enter the new release year: ', (newYear) => {
              rl.question('Enter the new genre: ', (newGenre) => {
                updateMovie(title, newTitle, newDirector, newYear, newGenre);
                displayMenu();
              });
            });
          });
        });
      });
      break;
    case '4':
      rl.question('Enter the movie title to delete: ', (title) => {
        deleteMovie(title);
        displayMenu();
      });
      break;
    case '5':
      rl.question('Enter the search keyword: ', (keyword) => {
        searchMovies(keyword);
        displayMenu();
      });
      break;
    case '6':
      rl.question('Enter the filter criteria: ', (criteria) => {
        filterMovies(criteria);
        displayMenu();
      });
      break;
    case '7':
      fetchMoviesFromAPI();
      displayMenu();
      break;
    case '8':
      rl.close();
      break;
    default:
      console.log('Invalid choice. Please try again.');
      displayMenu();
      break;
  }
}

displayMenu();
