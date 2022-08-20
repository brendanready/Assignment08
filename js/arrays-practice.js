/*
        Brendan Ready
        Assignment 08
*/

// Practice with Arrays

//STEP 1
/* 
let favMovies = ['No Country For Old Men', 'Gangs of New York', 'The Godfather Part II', 'There Will Be Blood', 'Pulp Fiction'];
console.log(favMovies[1]);
*/

//STEP 2
/* 
let movies = new Array(5);
movies[0] = 'No Country For Old Men';
movies[1] = 'Gangs of New York';
movies[2] = 'The Godfather Part II';
movies[3] = 'There Will Be Blood';
movies[4] = 'Pulp Fiction';
console.log(movies[0]);
*/

//STEP 3
/* 
let movies = new Array(5);
movies[0] = 'No Country For Old Men';
movies[1] = 'Gangs of New York';
movies[2] = 'The Godfather Part II';
movies[3] = 'There Will Be Blood';
movies[4] = 'Pulp Fiction';
movies.splice(2, 0, 'Saving Private Ryan');
console.log(movies.length);
*/

//STEP 4
/* 
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'Gangs of New York';
movies[2] = 'The Godfather Part II';
movies[3] = 'There Will Be Blood';
movies[4] = 'Pulp Fiction';
delete movies[0];
console.log(movies);
*/

//STEP 5
/*
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'Gangs of New York';
movies[2] = 'The Godfather Part II';
movies[3] = 'There Will Be Blood';
movies[4] = 'Pulp Fiction';
movies[5] = 'Saving Private Ryan';
movies[6] = 'Scarface';

for (let movie in movies) {
	if (movies.hasOwnProperty(movie)) {
		console.log(movies[movie]);
	}
}
*/

//STEP 6
/* 
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'Gangs of New York';
movies[2] = 'The Godfather Part II';
movies[3] = 'There Will Be Blood';
movies[4] = 'Pulp Fiction';
movies[5] = 'Saving Private Ryan';
movies[6] = 'Scarface';

for (let movie of movies) {
	console.log(movie);
}
*/

//STEP 7
/* 
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'Gangs of New York';
movies[2] = 'The Godfather Part II';
movies[3] = 'There Will Be Blood';
movies[4] = 'Pulp Fiction';
movies[5] = 'Saving Private Ryan';
movies[6] = 'Scarface';

movies.sort();

for (let movie of movies) {
	console.log(movie);
}
*/

//STEP 8
/* 
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'Gangs of New York';
movies[2] = 'The Godfather Part II';
movies[3] = 'There Will Be Blood';
movies[4] = 'Pulp Fiction';
movies[5] = 'Saving Private Ryan';
movies[6] = 'Scarface';

let leastFavMovies = ['Bridget Jones\'s Diary', 'Waiting to Exhale', 'The Sound of Music'];

console.log('Movies I Like:');
console.log('');
for (let movie of movies) {
	console.log(movie);
}
console.log('...');
console.log('');
console.log('Movies I regret watching:');
console.log('');
for (let leastFavMovie of leastFavMovies) {
	console.log(leastFavMovie);
}
console.log('...');
*/

//STEP 9
/* 
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'Gangs of New York';
movies[2] = 'The Godfather Part II';
movies[3] = 'There Will Be Blood';
movies[4] = 'Pulp Fiction';
movies[5] = 'Saving Private Ryan';
movies[6] = 'Scarface';

let leastFavMovies = ['Bridget Jones\'s Diary', 'Waiting to Exhale', 'The Sound of Music'];

movies = movies.concat(leastFavMovies).sort().reverse();

console.log('Movies I Like and Movies I regret watching:');
console.log('');
for (let movie of movies) {
	console.log(movie);
}
console.log('...');
*/

//STEP 10
/* 
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'Gangs of New York';
movies[2] = 'The Godfather Part II';
movies[3] = 'There Will Be Blood';
movies[4] = 'Pulp Fiction';
movies[5] = 'Saving Private Ryan';
movies[6] = 'Scarface';

let leastFavMovies = ['Bridget Jones\'s Diary', 'Waiting to Exhale', 'The Sound of Music'];

movies = movies.concat(leastFavMovies).sort().reverse();

let lastMovie = movies.pop();

console.log('Last movie in the list:');
console.log('');
console.log(lastMovie);
*/

//STEP 11

/* 
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'Gangs of New York';
movies[2] = 'The Godfather Part II';
movies[3] = 'There Will Be Blood';
movies[4] = 'Pulp Fiction';
movies[5] = 'Saving Private Ryan';
movies[6] = 'Scarface';

let leastFavMovies = ['Bridget Jones\'s Diary', 'Waiting to Exhale', 'The Sound of Music'];

movies = movies.concat(leastFavMovies).sort().reverse();

let firstMovie = movies.shift();

console.log('First movie in the list:');
console.log('');
console.log(firstMovie);
*/

//STEP 12
/* 
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'Gangs of New York';
movies[2] = 'The Godfather Part II';
movies[3] = 'There Will Be Blood';
movies[4] = 'Pulp Fiction';
movies[5] = 'Saving Private Ryan';
movies[6] = 'Scarface';

let leastFavMovies = ['Bridget Jones\'s Diary', 'Waiting to Exhale', 'The Sound of Music'];

movies = movies.concat(leastFavMovies).sort().reverse();

let moreMovies = ['Terminator 2', '1917', 'Alien'];

const replaceLeastFavMovies = (movies) => {
	for (let movie of movies) {
		// console.log(movie);
		if (movie === "Bridget Jones\'s Diary" || movie === "Waiting to Exhale" || movie === "The Sound of Music") {
			let index = movies.indexOf(movie);
			console.log(`Index of ${movie}: ${index}`);
			movies[index] = moreMovies.shift();
		}
	}
}

replaceLeastFavMovies(movies);

console.log('');
console.log('The movies I don\'t like have now been replaced with ones I do like:');
console.log('');
for (let movie of movies) {
	console.log(movie);
}
*/

//STEP 13
/* 
let movies = [['The Godfather Part II', 1], ['No Country For Old Men', 2], ['Gangs of New York', 3], ['Scarface', 4], ['Pulp Fiction', 5]];

for (let movie of movies) {
	let movieName = movie.filter((name) => {
		return typeof name === "string";
	});
	console.log(movieName.toString());
}
*/

//STEP 14
/* 
let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];

const showEmployee = (employees) => {
	for (let employee of employees) {
		console.log(employee.toUpperCase());
	}
};
console.log('Employees:');
console.log('');
showEmployee(employees);
*/

//STEP 15
/* 
let testData = [58, '', 'abcd', true, null, false, 0];

const filterValues = (values) => {
	return values.filter(function(value) {
		return (value != '' && value != false && value != null && value != 0);
	});
};

console.log(filterValues(testData));
*/

//STEP 16
/* 
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const randomArrayItem = (array) => {
	let item = array[Math.floor(array.length * Math.random())];
	return item;
};
console.log(randomArrayItem(myArray));
*/

//STEP 17
/* 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers2 = [3, 6, 8, 0, -22, 21, 7, 22, 99, 79];
let numbers3 = [221, 332, 663, 224, 4445, 4556, 227, 722, 4223, 544];

const getLargestNumber = (array) => {
	let largestNumber = Math.max(...array);
	return largestNumber;
};

console.log(getLargestNumber(numbers));
console.log(getLargestNumber(numbers2));
console.log(getLargestNumber(numbers3));
*/