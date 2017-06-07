const JeffApp = {
  init(formSelector) {
    document
    .querySelector(formSelector)
    .addEventListener('submit', this.addMovie)
  },

  addMovie(ev) {
    ev.preventDefault()
    const flickName = ev.target()
    console.log('submitted!')
  },

}

JeffApp.init('#movieForm')
