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
              text: '\t' + store.state.author[0].authorSurname + ' ' + 'store.state.authorIO' + ' '
                + store.state.title + ' / ' + 'store.state.authorIO' + ' ' + store.state.titleInformation + ' '
                + 'store.state.authorSurname' + '.- ' + store.state.place + ': '
                + store.state.publishingHouse + ', ' + store.state.year + '.- '
                + store.state.count + ' c.',
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