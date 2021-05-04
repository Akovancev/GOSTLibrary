import {
    Document,
    Paragraph,
    TextRun
  } from 'docx';
import {store} from './store'

export class DocumentCreator {
  public create(): Document {
    return new Document({
      sections: [{
        children: [
          new Paragraph ({
            children: [
              new TextRun({ 
              text: store.state.author + store.state.place + store.state.publishingHouse + store.state.title,
              font: "Times New Roman",
              size: 28
              })
            ],
          })
        ]
      }]
    })  
  }
}