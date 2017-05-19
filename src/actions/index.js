// make sure this action creator is wired up to redux

export function selectBook(book)  {
  // selectBook is an ActionCreator, it needs to return an action 
  // an object with a type property
  // always contains a type, always an uppercase, usually pull types out to other files
  // and generally contains a payload as well
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

