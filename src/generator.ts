import {
  Document,
  Paragraph,
  TextRun
} from 'docx';
import { store } from './store'



export class DocumentCreator {
  private createTextAuthor(props: any): String {
    let text = ''
    for (var p of props) {
      text += p.authorIO + ' ' + p.authorSurname + ', '
    }
    return text.substring(0, text.length - 2)
  }
  private createTextEditor(props: any): String {
    let text = 'под. ред. '
    for (var p of props) {
      text += p.editorIO + ' ' + p.editorSurname + ', '
    }
    return text.substring(0, text.length - 2)
  }
  private createTextTranslator(props: any): String {
    let text = 'пер. '
    for (var p of props) {
      text += p.translatorIO + ' ' + p.translatorSurname + ', '
    }
    return text.substring(0, text.length - 2)
  }
  private createTextCollective(props: any): String {
    let text = ''
    for (var p of props) {
    }
    return text.substring(0, text.length - 2)
  }

  private createParagraph(props: any): Paragraph {
    let n = props.id + 1
    let text = '\t' + n + '. '
    const documentCreator = new DocumentCreator();
    if (props.type === 'book') {
      if (!props.authorCheck && props.author.length <= 3) {
        text += props.author[0].authorSurname + ' ' + props.author[0].authorIO + ' '
      }
      text += props.title + ' '
      if (!props.tomCheck) {
        text += ': в ' + props.tomCount + ' т. '
      }
      if (!props.tomCheckNumber) {
        text += 'Т. ' + props.tomNumber + ' '
      }
      if (props.tomName != '') {
        text += props.tomName + ' '
      }
      if (!props.titleCheck) {
        text += ': ' + props.titleInformation + ' '
      }
      text += '/ ' + documentCreator.createTextAuthor(props.author)
      if (props.editor.length > 0) {
        text += ' ; ' +  documentCreator.createTextEditor(props.editor)
      }
      if (props.translator.length > 0) {
        text += ' ; ' +  documentCreator.createTextTranslator(props.translator)
      }
      text += '. - ' + props.place
      text += ' : ' + props.publishingHouse
      text += ', ' + props.year
      text += '. - ' + props.count + ' c.'
    }
    return new Paragraph({
      children: [new TextRun({
        text: text,
        font: "Times New Roman",
        size: 28
      })
      ],
    })
  }

  public create(): Document {
    return new Document({
      sections: [{
        children: store.state.map(this.createParagraph)
      }]
    })
  }
}