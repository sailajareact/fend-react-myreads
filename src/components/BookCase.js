import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf'

const shelves = {
    currentlyReading: ['Currently Reading', 'currentlyReading'],
    wantToRead: ['Want to Read', 'wantToRead'],
    read: ['Read', 'read']
  }    


class BookCase extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookShelfChange: PropTypes.func.isRequired
    }

    
    handleBookShelfChange = (book, shelf) => {
        this.props.onBookShelfChange(book, shelf);
    }

    render() {
        return (

            <div className="list-books-content">
            { Object.keys(shelves).map((shelf) =>
              <Shelf key={shelf}
                cat={shelves[shelf][1]}
                title={shelves[shelf][0]}
                books={ this.props.books.filter(bs => bs.shelf === shelves[shelf][1]) }
                onBookShelfChange={ this.handleBookShelfChange }
              />
            )}
          </div>
            
        )
    }
}

export default BookCase


// <div className="list-books-content">
//                 <div>
//                     <Shelf
//                         title="Currently Reading"
//                         cat="currentlyReading"
//                         books={this.props.books.filter(bs => bs.shelf === 'currentlyReading')}
//                         onBookShelfChange={this.handleBookShelfChange}
//                     />
//                     <Shelf
//                         title="Want to Read"
//                         cat="wantToRead"
//                         books={this.props.books.filter(bs => bs.shelf === 'wantToRead')}
//                         onBookShelfChange={this.handleBookShelfChange}
//                     />
//                     <Shelf
//                         title="Read"
//                         cat="read"
//                         books={this.props.books.filter(bs => bs.shelf === 'read')}
//                         onBookShelfChange={this.handleBookShelfChange}
//                     />
//                 </div>
//             </div>