import React from 'react';

export function AddNews({ img, title, text, url = '#' }) {
  /* Формирование раздела "Дополнительные новости" */

  return (
    <a href={url} className='news-add'>
      <img className='news-add-img' src={img} alt={title}/>
      <div className='title-text news-add-title'>{title}</div>
      <div className='news-add-text base-text'>{text}</div>
    </a>
  );
}