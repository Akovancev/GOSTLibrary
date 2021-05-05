export let store = {
    callback() {
        console.log("state changed")
    },
    observerApp(subscribe) {
        this.callback = subscribe
    },
    state : {
        type: 'book',
        author: [
            {
                id: 0,
                authorIO: '',
                authorSurname: ''
            }
        ],
        title: '',
        titleInformation: '',
        place: '',
        replace: '',
        publishingHouse: '',
        republishingHouse: '',
        year: '',
        editor: [
            {
                id: 0,
                editorIO: '',
                editorSurname: ''
            }
        ],
        translator: [
            {
                id: 0,
                translatorIO: '',
                translatorSurname: ''
            }
        ],
        collectives: [
            {
                id: 0,
                collective: '',
            }
        ],
        count: '',
        series: ''
    },
    updateAuthorSurname(newElem, i) {
        this.state.author[i].authorSurname = newElem
        this.callback()
    },
    updateAuthorIO(newElem, i) {
        this.state.author[i].authorIO = newElem
        this.callback()
    },
    updateTitle(newElem) {
        this.state.title = newElem
        this.callback()
    },
    updateInformation(newElem){
        this.state.titleInformation = newElem
        this.callback()
    },
    updateEditorSurname(newElem, i) {
        this.state.editor[i].editorSurname = newElem
        this.callback()
    },
    updateEditorIO(newElem, i) {
        this.state.editor[i].editorIO = newElem
        this.callback()
    },
    updateTranslatorSurname(newElem, i) {
        this.state.translator[i].translatorSurname = newElem
        this.callback()
    },
    updateTranslatorIO(newElem, i) {
        this.state.translator[i].translatorIO = newElem
        this.callback()
    },
    updateCollective(newElem, i) {
        this.state.collectives[i].collective = newElem
        this.callback()
    },
    updatePlace(newElem) {
        this.state.place = newElem
        this.callback()
    },
    updateRePlace(newElem) {
        this.state.replace = newElem
        this.callback()
    },
    updatePublishingHouse(newElem) {
        this.state.publishingHouse = newElem
        this.callback()
    },
    updateRePublishingHouse(newElem) {
        this.state.republishingHouse = newElem
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
    }
}