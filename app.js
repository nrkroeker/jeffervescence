const JeffApp = {
  // Initialize values and add event listener
  init(selectors) {
    this.max = 0
    this.movies = []
    this.list = document.querySelector(selectors.listSelector)
    document
    .querySelector(selectors.formSelector)
    .addEventListener('submit', this.addMovie.bind(this))
  },

  // Move list item up
  moveUp(movie, ev) {
    ev.preventDefault()
    const listItem = ev.target.closest('li')

    // Move actual list item
    this.list.insertBefore(listItem, listItem.previousElementSibling)

    // Change position in array
    const index = this.movies.findIndex((listItem, i) => {
      return listItem.id === movie.id
    })

    const swapMovie = this.movies[index]
    this.movies[index] = this.movies[index - 1]
    this.movies[index - 1] = swapMovie
  },

  // Move list item down
  moveDown(movie, ev) {
    ev.preventDefault()
    const listItem = ev.target.closest('li')

    // Move actual list item
    this.list.insertBefore(listItem.nextSibling, listItem)

    // Change position in array
    const index = this.movies.findIndex((listItem, i) => {
      return listItem.id === movie.id
    })

    const swapMovie = this.movies[index]
    this.movies[index] = this.movies[index + 1]
    this.movies[index + 1] = swapMovie  },

  // Change favorite movie image
  favoriteMovie(ev) {
    // const button = ev.target.parentElement
    // const li = button.parentElement
    if(ev.target.getAttribute('src') === 'heart.png') {
      ev.target.src = 'heart-full.png'
    } else {
      ev.target.src = 'heart.png'
    }
  },

  // Remove movie from list
  deleteMovie(ev) {
    ev.preventDefault()
    const button = ev.target.closest('button')
    const li = ev.target.closest('li')
    const index = li.className

    this.movies.splice(index, 1)

    li.outerHTML = ''
  },

  // Add movie to unordered list
  addMovie(ev) {
    ev.preventDefault()
    const m = ev.target
    const movie = {
      id: this.max,
      name: m.movieTitle.value,
    }

    const listItem = this.renderListItem(movie)
    this.list.appendChild(listItem)
    this.movies.push(movie)

    const buttons = listItem.childNodes
    buttons[1].addEventListener('click', this.deleteMovie.bind(this))
    buttons[2].addEventListener('click', this.favoriteMovie.bind(this))
    buttons[3].addEventListener('click', this.moveDown.bind(this, movie))
    buttons[4].addEventListener('click', this.moveUp.bind(this, movie))


    ++ this.max

    m.movieTitle.value = ''
  },

  // Create list item elements
  renderListItem(movie) {
    const item = document.createElement('li')
    item.textContent = movie.name
    item.className = movie.id
    item.dataset.id = movie.id

    const del = document.createElement('button')
    del.innerHTML = '<img src="garbage.png" alt="Delete" />'
    del.className = 'del'
    item.appendChild(del)

    const fav = document.createElement('button')
    fav.innerHTML = '<img src="heart.png" alt="Favorite" />'
    fav.className = 'fav'
    item.appendChild(fav)

    const down = document.createElement('button')
    down.innerHTML = '<img src="down.png" alt="Down" />'
    down.className = 'down'
    item.appendChild(down)

    const up = document.createElement('button')
    up.innerHTML = '<img src="up.png" alt="Up" />'
    up.className = 'up'
    item.appendChild(up)

    return item
  },

}

// Initialize
JeffApp.init({
  formSelector: '#movie-form',
  listSelector: '#movie-list'})
