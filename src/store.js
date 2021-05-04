export let store = {
    callback() {
        console.log("state changed")
    },
    type: '0',
    state : {
        author: '',
        title: '',
        place: '',
        publishingHouse: '',
        year: '',
        count: ''
    },
    updateAuthor(newElem) {
        this.state.author = newElem
        this.callback()
    },
    updateTitle(newElem) {
        this.state.title = newElem
        this.callback()
    },
    updatePlace(newElem) {
        this.state.place = newElem
        this.callback()
    },
    updatePublishingHouse(newElem) {
        this.state.publishingHouse = newElem
        this.callback()
    },
    updateYear(newElem) {
        this.state.year = newElem
        this.callback()
    },
    updateCount(newElem) {
        this.state.count = newElem
        this.callback()
    },
    updateType(newElem) {
        this.type = newElem
        this.callback()
    },
    observerApp(subscribe) {
        this.callback = subscribe
    }
}