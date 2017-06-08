const JeffApp = {

  init(selectors) {
    this.max = 0
    this.movies = []
    this.list = document.querySelector(selectors.listSelector)
    document
    .querySelector(selectors.formSelector)
    .addEventListener('submit', this.addMovie.bind(this))
  },

  favoriteMovie(ev) {
    // const button = ev.target.parentElement
    // const li = button.parentElement
    if(ev.target.getAttribute('src') === 'heart.png') {
      ev.target.src = 'heart-full.png'
    } else {
      ev.target.src = 'heart.png'
    }
  },

  deleteMovie(ev) {
    const button = ev.target.parentElement
    const li = button.parentElement
    const index = li.className

    this.movies.splice(index, 1)
    console.log(this.movies)
    li.outerHTML = ''

  },

  addListeners(buttons) {
    buttons[1].addEventListener('click', this.deleteMovie.bind(this))
    buttons[2].addEventListener('click', this.favoriteMovie.bind(this))
  },

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
    this.addListeners(buttons)

    ++ this.max

    m.movieTitle.value = ''
  },

  renderListItem(movie) {
    const item = document.createElement('li')
    item.textContent = movie.name
    item.className = movie.id
    const del = document.createElement('button')
    del.innerHTML = '<img src="garbage.png" alt="Delete" />'
    del.className = 'del'
    item.appendChild(del)
    const fav = document.createElement('button')
    fav.innerHTML = '<img src="heart.png" alt="Favorite" />'
    fav.className = 'fav'
    item.appendChild(fav)
    return item
  },

}

JeffApp.init({
  formSelector: '#movie-form',
  listSelector: '#movie-list'})
