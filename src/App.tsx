import React, { Component } from "react";
import './App.css'

import {store} from './store'
import { saveAs } from "file-saver";
import { Packer } from "docx";
import { DocumentCreator } from "./generator";
import FormBook from "./Components/FormBook/FormBook";

class App extends Component {
  generate(): void {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create();

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }
  changeSelect = React.createRef<HTMLSelectElement>();
  onChangeSelect = () => {
   // store.updateType(this.changeSelect.current?.value)
  }

  render() {
    return (
      <div className="conteiner">
        {/* <select onChange={this.onChangeSelect} ref={this.changeSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select> */}
        <FormBook state={store.state} dispatch={store.dispatch.bind(store)}/>
        {/* <Author state={store.state} 
                updateAuthorSurname={store.updateAuthorSurname.bind(store)} 
                updateAuthorIO={store.updateAuthorIO.bind(store)}/>
        <button onClick={store.addAuthor}>Add Author</button>
        <button onClick={store.deleteAuthor}>Delete Author</button>
        <Field elem={store.state.title} 
                update={store.updateTitle.bind(store)}
                type='Title' />
        <Field elem={store.state.titleInformation}
                update={store.updateInformation.bind(store)}
                type='Title-Information' />
        <Editor state={store.state}
                updateEditorSurname={store.updateEditorSurname.bind(store)}
                updateEditorIO={store.updateEditorIO.bind(store)} />
        <button onClick={store.addEditor}>Add Editor</button>
        <button onClick={store.deleteEditor}>Delete Editor</button>
        <Translator state={store.state}
                updateTranslatorSurname={store.updateTranslatorSurname.bind(store)}
                updateTranslatorIO={store.updateTranslatorIO.bind(store)} />
        <button onClick={store.addTranslator}>Add Translator</button>
        <button onClick={store.deleteTranslator}>Delete Translator</button>
        <Collective state={store.state}
                updateCollective={store.updateCollective.bind(store)} />
        <button onClick={store.addCollective}>Add Collective</button>
        <button onClick={store.deleteCollective}>Delete Collective</button>
        <Field elem={store.state.place} 
                update={store.updatePlace.bind(store)}
                type='Place' />                
        <Field elem={store.state.replace} 
                update={store.updateRePlace.bind(store)}
                type='RePlace' />
        <Field elem={store.state.publishingHouse} 
                update={store.updatePublishingHouse.bind(store)}
                type='House' /> 
        <Field elem={store.state.republishingHouse} 
                update={store.updateRePublishingHouse.bind(store)}
                type='ReHouse' />                 
        <Field elem={store.state.year} 
                update={store.updateYear.bind(store)}
                type='Year' />                 
        <Field elem={store.state.count} 
                update={store.updateCount.bind(store)}
                type='Count' />           */}
        <button onClick={this.generate}>Generate!</button>
      </div>
    );
  }
}
export default App;
