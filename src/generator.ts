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
              text: store.type,
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