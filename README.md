# MyReads Project

This is the bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. 

## App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. 
The three shelves are:
* Currently Reading
* Want to Read
* Read
To change a book's category or remove a book from the list, click on the green button on  the book cover

## Run App Locally

The project uses Node.js and npm.  If you do not have Node >= 6.x installed, you can download it here: [Node.js](https://nodejs.org/en/)

Once Node is installed, navigate to the directory where you want to store the app
```
git clone https://github.com/sailajareact/fend-react-myreads.git
npm install or yarn install -->to install all dependencies
```
Once all of the dependencies have been installed you can launch the app with
```
npm start or yarn start
```

To get started developing right away:

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

### Resources and Documentation:
* [Create-react-app Documentation](https://github.com/facebookincubator/create-react-app)
* [React Router Documentation](http://knowbody.github.io/react-router-docs/)
* [React Training/React Router](https://reacttraining.com/react-router/web/api/BrowserRouter)
* [React API](https://facebook.github.io/react/docs/react-api.html)

### Udacity Resources:
* [Project starter template](https://github.com/udacity/reactnd-project-myreads-starter.git)
* [Project Rubric](https://review.udacity.com/#!/rubrics/918/view)
* [Udacity CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
* [Udacity HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
* [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)

