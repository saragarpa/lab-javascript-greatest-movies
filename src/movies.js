// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);

  // Bonus 1.1
  const uniqueDirectors = directors.filter((director, index) => {
    return directors.indexOf(director) === index;
  });

  return uniqueDirectors;
}

const directorsList = getAllDirectors(movies);
console.log("Directors:", directorsList);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return dramaMovies.length;
}

const stevenDramaCount = howManyMovies(movies);
console.log("Steven Spielberg Dramas:", stevenDramaCount);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  const totalScore = moviesArray.reduce((sum, movie) => {
    if (movie.score !== undefined) {
      return sum + movie.score;
    } else {
      return sum;
    }
  }, 0);

  const averageScore = totalScore / moviesArray.length;
  return Number(averageScore.toFixed(2));
}

const averageScore = scoresAverage(movies);
console.log("Average Score:", averageScore);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (!dramaMovies.length) {
    return 0;
  }

  const totalDramaScore = dramaMovies.reduce((sum, movie) => {
    if (movie.score !== undefined) {
      return sum + movie.score;
    } else {
      return sum;
    }
  }, 0);

  const averageScore = totalDramaScore / dramaMovies.length;
  return Number(averageScore.toFixed(2));
}

const averageDramaScore = dramaMoviesScore(movies);
console.log("Average Drama Score:", averageDramaScore);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];

  moviesCopy.sort((movieA, movieB) => {
    if (movieA.year !== movieB.year) {
      return movieA.year - movieB.year;
    }
    return movieA.title.localeCompare(movieB.title);
  });

  return moviesCopy;
}

const orderedMovies = orderByYear(movies);
console.log("Movies ordered by year:", orderedMovies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesCopy = [...moviesArray];

  moviesCopy.sort((movieA, movieB) => {
    return movieA.title.localeCompare(movieB.title);
  });

  const titles = moviesCopy.slice(0, 20).map((movie) => movie.title);

  return titles;
}

const alphabeticallyOrderedTitles = orderAlphabetically(movies);
console.log("First 20 movies:", alphabeticallyOrderedTitles);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesMinutes= moviesArray.map((movie) => {
    const movieObjCopy = { ...movie };

    const durationSplit = movie.duration.split(" ");
    let totalMinutes = 0;

    for (let part of durationSplit) {
        if (part.includes("h")) {
            const hours = parseInt(part);
            totalMinutes += hours * 60;
        } else if (part.includes("m")) {
            const minutes = parseInt(part);
            totalMinutes += minutes;
        }
    }
    movieObjCopy.duration = totalMinutes;
    return movieObjCopy;
  });
  
  return moviesMinutes;
}

const moviesInMinutes = turnHoursToMinutes(movies);
console.log(moviesInMinutes);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) {
    return null;
  }
}
