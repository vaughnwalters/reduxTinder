 import React, { Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li className="list-group-item">{book.title}
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

// connect takes a function and a component and produces a container.  the container is a component that is aware of the state in redux.  
export default connect(mapStateToProps)(BookList);
