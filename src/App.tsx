import React, { Component } from "react";
import './App.css'

import {store} from './store'
import { saveAs } from "file-saver";
import { Packer } from "docx";
import { DocumentCreator } from "./generator";


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

  newAuthorElement = React.createRef<HTMLInputElement>();
  newTitleElement = React.createRef<HTMLInputElement>();
  newPlaceElement = React.createRef<HTMLInputElement>();
  newPublishingHouseElement = React.createRef<HTMLInputElement>();
  newYearElement = React.createRef<HTMLInputElement>();
  newCountElement = React.createRef<HTMLInputElement>();
  changeSelect = React.createRef<HTMLSelectElement>();
  onChangeAuthor = () => {
    store.updateAuthor(this.newAuthorElement.current?.value)
  }
  onChangeTitle = () => {
    store.updateTitle(this.newTitleElement.current?.value)
  }
  onChangePlace = () => {
    store.updatePlace(this.newPlaceElement.current?.value)
  }
  onChangePublishingHouse = () => {
    store.updatePublishingHouse(this.newPublishingHouseElement.current?.value)
  }
  onChangeYear = () => {
    store.updateYear(this.newYearElement.current?.value)
  }
  onChangeCount = () => {
    store.updateCount(this.newCountElement.current?.value)
  }
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
        <input type="text" placeholder="Автор" 
          value={store.state.author} 
          onChange={ this.onChangeAuthor } 
          ref={this.newAuthorElement} />
        <input type="text" placeholder="Заглавие" 
          value={store.state.title} 
          onChange={ this.onChangeTitle } 
          ref={this.newTitleElement} />
        <input type="text" placeholder="Место издания" 
          value={store.state.place} 
          onChange={ this.onChangePlace } 
          ref={this.newPlaceElement} />
        <input type="text" placeholder="Издательство" 
          value={store.state.publishingHouse} 
          onChange={ this.onChangePublishingHouse } 
          ref={this.newPublishingHouseElement} />
        <input type="text" placeholder="Год издания" 
          value={store.state.year} 
          onChange={ this.onChangeYear } 
          ref={this.newYearElement} />
        <input type="text" placeholder="Количество страниц" 
          value={store.state.count} 
          onChange={ this.onChangeCount } 
          ref={this.newCountElement} />
        <button onClick={this.generate}>Generate!</button>
      </div>
    );
  }
}
export default App;
