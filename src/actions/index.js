import axios from 'axios';

export const FETCH_BOOKS = 'fetch_books';

const ROOT_URL = 'http://localhost:8080/books'

export function fetchBooks(){
	const request = axios.get(`${ROOT_URL}/books`);

	return {
		type: FETCH_BOOKS,
		payload: request
	};
}