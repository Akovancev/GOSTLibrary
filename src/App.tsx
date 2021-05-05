import React, { Component } from "react";
import './App.css'

import {store} from './store'
import { saveAs } from "file-saver";
import { Packer } from "docx";
import { DocumentCreator } from "./generator";
import Author from "./Components/Author/Author";
import Editor from "./Components/Responsibility/Editors/Editor";
import Field from "./Components/Field";
import Translator from "./Components/Responsibility/Translators/Translator";
import Collective from "./Components/Responsibility/Collectives/Collective";

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
    store.updateType(this.changeSelect.current?.value)
  }

  render() {
    return (
      <div className="conteiner">
        <select onChange={this.onChangeSelect} ref={this.changeSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <Author state={store.state} 
                updateAuthorSurname={store.updateAuthorSurname.bind(store)} 
                updateAuthorIO={store.updateAuthorIO.bind(store)}/>
        <Field elem={store.state.title} 
                update={store.updateTitle.bind(store)}
                type='Title' />
        <Field elem={store.state.titleInformation}
                update={store.updateInformation.bind(store)}
                type='Title-Information' />
        <Editor state={store.state}
                updateEditorSurname={store.updateEditorSurname.bind(store)}
                updateEditorIO={store.updateEditorIO.bind(store)} />
        <Translator state={store.state}
                updateTranslatorSurname={store.updateTranslatorSurname.bind(store)}
                updateTranslatorIO={store.updateTranslatorIO.bind(store)} />
        <Collective state={store.state}
                updateCollective={store.updateCollective.bind(store)} />
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
                type='Count' />          
        <button onClick={this.generate}>Generate!</button>
      </div>
    );
  }
}
export default App;
