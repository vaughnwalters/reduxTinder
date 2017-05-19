import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books.js";
import ActiveBookReducer from './reducer_active_book'

// add BooksReducer to the combineCall and this will add a key of books to the global application state, and value is whatever gets returned from the BooksReducer (an array of books in this case)

// state will always be equal to an object with a key of books and a value of an array of books

// any key to an object that we give to combineReducers ends up as a key on global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
 
