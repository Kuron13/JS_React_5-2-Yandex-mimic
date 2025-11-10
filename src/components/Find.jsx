import React from 'react';

 /* Тестовый набор типов для раздела "Поиск" */
export const typesListTest = [
  {name: 'Видео', url: '#'},
  {name: 'Картинки', url: '#'},
  {name: 'Новости', url: '#'},
  {name: 'Карты', url: '#'},
  {name: 'Маркет', url: '#'},
  {name: 'Переводчик', url: '#'},
  {name: 'Эфир', url: '#'},
  {name: 'ещё', url: '#'}
]

export function Find() {
  /* Формирование раздела "Поиск" из тулбара типов и поисковой строки */

  return (
    <div className='find'>
      <FindToolbar typesList={typesListTest} />

      <SearchForm/>

      <div className='find-text-help'>
        <div className='base-text'>Найдётся всё, например,</div>
        <div className='add-text'>фаза луны сегодня</div>
      </div>

    </div>
  )
}

export function FindToolbar({ typesList }) {
  /* Тулбар типов для раздела 'Поиск' */

  return (
    <div className='find-types'>
      {typesList.map((type, i) => (<a href={type.url} className='find-type' key={i}>{type.name}</a>))}
    </div>
  );
}

export function SearchForm() {
  /* Строка ввода для раздела 'Поиск' */

  return (
    <form className='find-form'>
      <div className='yandex'>Яндекс</div>
      <label htmlFor='find-input'></label>
      <input type='text' id='find-input' className='find-input'/>
      <button className='find-btn'>Найти</button>
    </form>
  );
}

