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
    },

    addAuthor() {
        let newElem = {
            id: store.state.author[store.state.author.length - 1].id + 1,
            authorIO: '',
            authorSurname: ''
        }
        store.state.author.push(newElem)
        store.callback()
    },
    addEditor() {
        let newElem = {
            id: store.state.editor[store.state.editor.length - 1].id + 1,
            editorIO: '',
            editorSurname: ''
        }
        store.state.editor.push(newElem)
        store.callback()
    },
    addTranslator() {
        let newElem = {
            id: store.state.translator[store.state.translator.length - 1].id + 1,
            translatorIO: '',
            translatorSurname: ''
        }
        store.state.translator.push(newElem)
        store.callback()
    },
    addCollective() {
        let newElem = {
            id: store.state.collectives[store.state.collectives.length - 1].id + 1,
            collective: ''
        }
        store.state.collectives.push(newElem)
        store.callback()
    },

    deleteAuthor() {
        store.state.author.pop()
        store.callback()
    },
    deleteEditor() {
        store.state.editor.pop()
        store.callback()
    },
    deleteTranslator() {
        store.state.translator.pop()
        store.callback()
    },
    deleteCollective() {
        store.state.collectives.pop()
        store.callback()
    }
}