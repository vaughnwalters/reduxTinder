// all reducers get two arguments, state and action
// state argument is not application state, only the state this reducer is responsible for
// if argument is undefined here, set it to null
export default function (state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state
}
