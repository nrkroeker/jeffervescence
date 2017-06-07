const JeffApp = {

  init(selectors) {
    this.max = 0
    this.movies = []
    this.list = document.querySelector(selectors.listSelector)
    document
    .querySelector(selectors.formSelector)
    .addEventListener('submit', this.addMovie.bind(this))
  },

  addMovie(ev) {
    ev.preventDefault()
    const m = ev.target
    const movie = {
      id: this.max + 1,
      name: m.movieTitle.value,
    }

    const listItem = this.renderListItem(movie)
    this.list.appendChild(listItem)

    this.movies.push(movie)

    console.log(this.movies)

    ++ this.max
  },

  renderListItem(movie) {
    const item = document.createElement('li')
    item.textContent = movie.name
    const fav = document.createElement('button')
    fav.textContent = "<3"
    fav.className = "fav"
    item.appendChild(fav)
    return item
  }

}

JeffApp.init({
  formSelector: '#movie-form',
  listSelector: '#movie-list'})
