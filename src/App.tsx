import React, { Component } from "react";
import './App.css'

import { store } from './store'
import { saveAs } from "file-saver";
import { Packer } from "docx";
import { DocumentCreator } from "./generator";
import Selector from "./Components/Selector/Selector";
import ButtonsAddDelete from "./Components/CommonComponents/ButtonsAddDelete/ButtonsAddDelete";


class App extends Component {
  generate(): void {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create();

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }


  render() {
    return (
      <div className="conteiner">
        {
          store.state.map(state => <Selector state={state} dispatch={store.dispatch.bind(store)} check={store.state.length > 1} />)
        }
        
        <ButtonsAddDelete dispatch={store.dispatch.bind(store)} 
                    check={store.state.length > 1} 
                    type='STATE' />
        <br />
        <button onClick={this.generate}>Generate!</button>
      </div>
    );
  }
}
export default App;
