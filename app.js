const JeffApp = {

  init(formSelector) {
    this.max = 0
    document
    .querySelector(formSelector)
    .addEventListener('submit', this.addMovie.bind(this))
  },

  addMovie(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.movieTitle.value,
    }

    ++ this.max
    console.log(flick.id)
  },

}

JeffApp.init('#movieForm')
