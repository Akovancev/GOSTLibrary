import React from 'react'

const Field = (props) => {
  let newElement = React.createRef()
  const onChange = () => {
    let param = {
      type: t,
      id: props.index,
      newElem: newElement.current.value,
      i: props.id
    }
    props.dispatch(param)
  }
  let placeholder
  let t
  if (props.type === 'IO-A') {
    placeholder = 'Инициалы автора'
    t = 'UPDATE-AUTHOR-IO'
  }
  else if (props.type === 'Surname-A') {
    placeholder = 'Фамилия  автора'
    t = 'UPDATE-AUTHOR-SURNAME'
  }
  else if (props.type === 'IO-Article') {
    placeholder = 'Инициалы автора статьи'
    t = 'UPDATE-AUTHOR-IO-ARTICLE'
  }
  else if (props.type === 'Surname-Article') {
    placeholder = 'Фамилия  автора статьи'
    t = 'UPDATE-AUTHOR-SURNAME-ARTICLE'
  }
  else if (props.type === 'IO-E') {
    placeholder = 'Инициалы редактора'
    t = 'UPDATE-EDITOR-IO'
  }
  else if (props.type === 'Surname-E') {
    placeholder = 'Фамилия редактора'
    t = 'UPDATE-EDITOR-SURNAME'
  }
  else if (props.type === 'IO-T') {
    placeholder = 'Инициалы переводчика'
    t = 'UPDATE-TRANSLATOR-IO'
  }
  else if (props.type === 'Surname-T') {
    placeholder = 'Фамилия  переводчика'
    t = 'UPDATE-TRANSLATOR-SURNAME'
  }
  else if (props.type === 'Collective') {
    placeholder = 'Коллектив'
    t = 'UPDATE-COLLECTIVE'
  }
  else if (props.type === 'Number') {
    placeholder = 'Номер журнала/газеты'
    t = 'UPDATE-UPDATE-NUMBER-ARTICLE'
  }
  else if (props.type === 'Date') {
    placeholder = 'Число и месяц выпуска газеты'
    t = 'UPDATE-DATE-ARTICLE'
  }
  else if (props.type === 'Date-Conference') {
    placeholder = 'Дата конференции'
    t = 'UPDATE-DATE-CONFERENCE'
  }
  else if (props.type === 'Date-Standart') {
    placeholder = 'Дата принятия документа'
    t = 'UPDATE-DATE-STANDART'
  }
  else if (props.type === 'City-Conference') {
    placeholder = 'Город проведения конференции'
    t = 'UPDATE-CITY-CONFERENCE'
  }
  else if (props.type === 'Title') {
    placeholder = 'Заглавие'
    t = 'UPDATE-TITLE'
  }
  else if (props.type === 'Title-Standart-Before') {
    placeholder = 'Обозначение ранее дествующего документа'
    t = 'UPDATE-TITLE-BEFORE'
  }
  else if (props.type === 'Title-Newspaper') {
    placeholder = 'Название газеты'
    t = 'UPDATE-TITLE-ARTICLE'
  }
  else if (props.type === 'Title-Magazine') {
    placeholder = 'Название журнала '
    t = 'UPDATE-TITLE-ARTICLE'
  }
  else if (props.type === 'Title-Article') {
    placeholder = 'Заглавие статьи'
    t = 'UPDATE-TITLE-ARTICLE'
  }
  else if (props.type === 'Title-Conference') {
    placeholder = 'Название конференции'
    t = 'UPDATE-TITLE'
  }
  else if (props.type === 'Title-Information') {
    placeholder = 'Сведения о заглавии'
    t = 'UPDATE-INFORMATION'
  }
  else if (props.type === 'Information-Conference') {
    placeholder = 'Сведения о конференции'
    t = 'UPDATE-INFORMATION'
  }
  else if (props.type === 'Place') {
    placeholder = 'Место издания'
    t = 'UPDATE-PLACE'
  }
  else if (props.type === 'RePlace') {
    placeholder = 'Место переиздания'
    t = 'UPDATE-REPLACE'
  }
  else if (props.type === 'House') {
    placeholder = 'Издательство'
    t = 'UPDATE-PUBLISHING'
  }
  else if (props.type === 'ReHouse') {
    placeholder = 'Издательство переиздания'
    t = 'UPDATE-REPUBLISHING'
  }
  else if (props.type === 'Year') {
    placeholder = 'Год издания'
    t = 'UPDATE-YEAR'
  }
  else if (props.type === 'Count') {
    placeholder = 'Обьем'
    t = 'UPDATE-COUNT'
  }
  else if (props.type === 'T-Name') {
    placeholder = 'Название тома'
    t = 'UPDATE-TOM-NAME'
  }
  else if (props.type === 'T-Number') {
    placeholder = 'Номер тома'
    t = 'UPDATE-TOM-NUMBER'
  }
  return (
    <input type="text" placeholder={placeholder}
    value={props.elem} 
    onChange={ onChange } 
    ref={ newElement } />
  )
}

export default Field;