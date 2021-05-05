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

    _updateAuthorSurname(newElem, i) {
        this.state.author[i].authorSurname = newElem
        this.callback()
    },
    _updateAuthorIO(newElem, i) {
        this.state.author[i].authorIO = newElem
        this.callback()
    },
    _updateTitle(newElem) {
        this.state.title = newElem
        this.callback()
    },
    _updateInformation(newElem){
        this.state.titleInformation = newElem
        this.callback()
    },
    _updateEditorSurname(newElem, i) {
        this.state.editor[i].editorSurname = newElem
        this.callback()
    },
    _updateEditorIO(newElem, i) {
        this.state.editor[i].editorIO = newElem
        this.callback()
    },
    _updateTranslatorSurname(newElem, i) {
        this.state.translator[i].translatorSurname = newElem
        this.callback()
    },
    _updateTranslatorIO(newElem, i) {
        this.state.translator[i].translatorIO = newElem
        this.callback()
    },
    _updateCollective(newElem, i) {
        this.state.collectives[i].collective = newElem
        this.callback()
    },
    _updatePlace(newElem) {
        this.state.place = newElem
        this.callback()
    },
    _updateRePlace(newElem) {
        this.state.replace = newElem
        this.callback()
    },
    _updatePublishingHouse(newElem) {
        this.state.publishingHouse = newElem
        this.callback()
    },
    _updateRePublishingHouse(newElem) {
        this.state.republishingHouse = newElem
        this.callback()
    },
    _updateYear(newElem) {
        this.state.year = newElem
        this.callback()
    },
    _updateCount(newElem) {
        this.state.count = newElem
        this.callback()
    },
    _updateType(newElem) {
        this.type = newElem
        this.callback()
    },

    _addAuthor() {
        let newElem = {
            id: store.state.author[store.state.author.length - 1].id + 1,
            authorIO: '',
            authorSurname: ''
        }
        store.state.author.push(newElem)
        store.callback()
    },
    _addEditor() {
        let newElem = {
            id: store.state.editor[store.state.editor.length - 1].id + 1,
            editorIO: '',
            editorSurname: ''
        }
        store.state.editor.push(newElem)
        store.callback()
    },
    _addTranslator() {
        let newElem = {
            id: store.state.translator[store.state.translator.length - 1].id + 1,
            translatorIO: '',
            translatorSurname: ''
        }
        store.state.translator.push(newElem)
        store.callback()
    },
    _addCollective() {
        let newElem = {
            id: store.state.collectives[store.state.collectives.length - 1].id + 1,
            collective: ''
        }
        store.state.collectives.push(newElem)
        store.callback()
    },

    _deleteAuthor() {
        store.state.author.pop()
        store.callback()
    },
    _deleteEditor() {
        store.state.editor.pop()
        store.callback()
    },
    _deleteTranslator() {
        store.state.translator.pop()
        store.callback()
    },
    _deleteCollective() {
        store.state.collectives.pop()
        store.callback()
    },

    dispatch(param) {
        if (param.type === 'UPDATE-AUTHOR-SURNAME') {
            this._updateAuthorSurname(param.newElem, param.i)
        }
        else if (param.type === 'UPDATE-AUTHOR-IO') {
            this._updateAuthorIO(param.newElem, param.i)            
        }
        else if (param.type === 'UPDATE-EDITOR-SURNAME') {
            this._updateEditorSurname(param.newElem, param.i)
        }
        else if (param.type === 'UPDATE-EDITOR-IO') {
           this._updateEditorIO(param.newElem, param.i)            
        }
        else if (param.type === 'UPDATE-TRANSLATOR-SURNAME') {
            this._updateTranslatorSurname(param.newElem, param.i) 
        }
        else if (param.type === 'UPDATE-TRANSLATOR-IO') {
            this._updateTranslatorIO(param.newElem, param.i)            
        }
        else if (param.type === 'UPDATE-COLLECTIVE') {
            this._updateCollective(param.newElem, param.i)
        }
        else if (param.type === 'UPDATE-TITLE') {
            this._updateTitle(param.newElem)
        }
        else if (param.type === 'UPDATE-INFORMATION') {
            this._updateInformation(param.newElem)
        }
        else if (param.type === 'UPDATE-PLACE') {
            this._updatePlace(param.newElem)
        }
        else if (param.type === 'UPDATE-REPLACE') {
            this._updateRePlace(param.newElem)
        }
        else if (param.type === 'UPDATE-YEAR') {
            this._updateYear(param.newElem)
        }
        else if (param.type === 'UPDATE-COUNT') {
            this._updateCount(param.newElem)
        }
        else if (param.type === 'UPDATE-PUBLISHING') {
            this._updatePublishingHouse(param.newElem)
        }
        else if (param.type === 'UPDATE-REPUBLISHING') {
            this._updateRePublishingHouse(param.newElem)
        }
        else if (param.type === 'UPDATE-TYPE') {
            this._updateType(param.newElem)
        }
        else if (param.type === 'ADD-AUTHOR') {
            this._addAuthor()
        }
        else if (param.type === 'ADD-EDITOR') {
            this._addEditor()
        }
        else if (param.type === 'ADD-TRANSLATOR') {
            this._addTranslator()
        }
        else if (param.type === 'ADD-COLLECTIVE') {
            this._addCollective()
        }
        else if (param.type === 'DELETE-AUTHOR') {
            this._deleteAuthor()
        }
        else if (param.type === 'DELETE-EDITOR') {
            this._deleteEditor()
        }
        else if (param.type === 'DELETE-TRANSLATOR') {
            this._deleteTranslator()
        }
        else if (param.type === 'DELETE-COLLECTIVE') {
            this._deleteCollective()
        }
    }
}