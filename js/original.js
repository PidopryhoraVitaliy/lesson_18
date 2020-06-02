/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания


'use strict';

let numberOfFilms;

function start(){

	do {
		numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
	} while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))
	
}

start();

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

	const numberOfQuestions = 2;
	let countOfAnswers = 0;

	do {
		
		const   lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
				ratingFilm = prompt('На сколько оцените его?', '');
		
		if (lastFilm == null || ratingFilm == null)
			continue;
		if (lastFilm.length == 0 || ratingFilm.length == 0)
			continue;
		if (lastFilm.length > 50)
			continue;
				
		personalMovieDB.movies[lastFilm] = ratingFilm;
		countOfAnswers++;
		
	} while (countOfAnswers < numberOfQuestions)
}

rememberMyFilms();

console.log('personalMovieDB: ', personalMovieDB);
console.log(`personalMovieDB.count: ${personalMovieDB.count}`);

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count <= 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	};
}

detectPersonalLevel();

/* 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы */

function showMyDB() {
	
	if (!personalMovieDB.privat) {
		console.log('main object: ', personalMovieDB);
	} else {
		console.log('this is private information: ', personalMovieDB);
	}
	
}

showMyDB();


/* 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres */

function writeYourGenres() {
	
	const numberOfQuestions = 3;
	let countOfAnswers = 0;

	do {
		countOfAnswers++;
		const genre = prompt(`Ваш любимый жанр под номером ${countOfAnswers}`, '');
		personalMovieDB.genres[countOfAnswers-1] = genre;
	} while (countOfAnswers < numberOfQuestions)
	
}

writeYourGenres();




