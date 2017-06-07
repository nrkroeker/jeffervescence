const JeffApp = {

  init(selectors) {
    this.max = 0
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
    
    ++ this.max
  },

  renderListItem(movie) {
    const item = document.createElement('li')
    item.textContent = movie.name
    return item
  }

}

JeffApp.init({
  formSelector: '#movie-form',
  listSelector: '#movie-list'})
