import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}
        </li>
      )
    })
  }


  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// this function is the glue between react and redux
// whenever our application state changes, this container will instantly re-render with a new list of books
// and when it re-renders it will show up as this.props.books
function mapStateToProps(state) {
  // whatever gets returned from here will show up as props inside of BookList
  return {
    books: state.books
  }
}
// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers.  that's what bindActionCreators is doing here with dispatch.  result of this function flows through dispatch.  dispatch receives it like a funnel and spits the out to the reducers in the application. 
  // this takes what returns from selectBook and make sure it flows through all the reducers 
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// connect takes a function and a component and produces a container.  the container is a component that is aware of the state in redux.  

// booklist is connected to state through the connect function
// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook.  Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
