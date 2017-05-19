// this is our reducer because it is a function that returns a piece of the application's state

// books reducer always returns an array of books 

// added this books reducer to the index.js inside reducers folder
export default function () {
  return [
    { title: 'Javascript: The Good Parts', pages: 101 },
    { title: 'Harry Potter', pages: 39 },
    { title: 'The Dark Tower', pages: 85 },
    { title: 'Eloquent Ruby', pages: 1 }
  ]
}
