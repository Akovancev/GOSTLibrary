export let store = {
    callback() {
        console.log("state changed")
    },
    type: '0',
    state : {
        authorIO: '',
        authorSurname: '',
        title: '',
        place: '',
        publishingHouse: '',
        year: '',
        count: ''
    },
    updateAuthorSurname(newElem) {
        this.state.authorSurname = newElem
        this.callback()
    },
    updateAuthorIO(newElem) {
        this.state.authorIO = newElem
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