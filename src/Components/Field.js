import React from 'react'

const Field = (props) => {
  let newElement = React.createRef()
  const onChange = () => {
    props.update( newElement.current.value, props.id)
  }
  let placeholder
  if (props.type === 'IO-A') {
    placeholder = 'Инициалы автора'
  }
  else if (props.type === 'Surname-A') {
    placeholder = 'Фамилия  автора'
  }
  else if (props.type === 'IO-E') {
    placeholder = 'Инициалы редактора'
  }
  else if (props.type === 'Surname-E') {
    placeholder = 'Фамилия редактора'
  }
  else if (props.type === 'IO-T') {
    placeholder = 'Инициалы переводчика'
  }
  else if (props.type === 'Surname-T') {
    placeholder = 'Фамилия  переводчика'
  }
  else if (props.type === 'Collective') {
    placeholder = 'Коллектив'
  }
  else if (props.type === 'Title') {
    placeholder = 'Заглавие'
  }
  else if (props.type === 'Title-Information') {
    placeholder = 'Сведения о заглавии'
  }
  else if (props.type === 'Place') {
    placeholder = 'Место издания'
  }
  else if (props.type === 'RePlace') {
    placeholder = 'Место переиздания'
  }
  else if (props.type === 'House') {
    placeholder = 'Издательство'
  }
  else if (props.type === 'ReHouse') {
    placeholder = 'Издательство переиздания'
  }
  else if (props.type === 'Year') {
    placeholder = 'Год издания'
  }
  else if (props.type === 'Count') {
    placeholder = 'Обьем'
  }
  return (
    <input type="text" placeholder={placeholder}
    value={props.elem} 
    onChange={ onChange } 
    ref={ newElement } />
  )
}

export default Field;