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
        {
          store.state.map(state => <FormBook state={state} dispatch={store.dispatch.bind(store)}/>)
        }
        
        <button onClick={this.generate}>Generate!</button>
      </div>
    );
  }
}
export default App;
