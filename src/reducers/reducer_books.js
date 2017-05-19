// this is our reducer because it is a function that returns a piece of the application's state

// books reducer always returns an array of books 

// added this books reducer to the index.js inside reducers folder
export default function () {
  return [
    { title: 'Javascript: The Good Parts'},
    { title: 'Harry Potter'},
    { title: 'The Dark Tower'},
    { title: 'Eloquent Ruby'}
  ]
}
