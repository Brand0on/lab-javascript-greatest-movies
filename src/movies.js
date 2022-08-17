// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((x) => x.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let numberOfMovies = moviesArray.filter(
    (x) => x.director === "Steven Spielberg" && x.genre.includes("Drama")
  );
  return numberOfMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let moviesWithScores = moviesArray.filter((x) => x.score != undefined);
  let scores = moviesWithScores.map((x) => x.score);

  let average = scores.reduce((acc, item) => {
    return acc + item;
  });
  return Math.round((average / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let totalScores = [];

  for (i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].genre.includes("Drama")) {
      totalScores.push(moviesArray[i].score);
    }
  }
  let averageDramaScore = totalScores.reduce((acc, item) => {
    return acc + item;
  }, 0);
  return Math.round((averageDramaScore / totalScores.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
