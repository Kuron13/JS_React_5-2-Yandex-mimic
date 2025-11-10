import React from 'react';

export function Adversting({ img, url = '#' }) {
  /* Формирование раздела "Реклама". Кликабельный баннер */

  return (
    <a href={url} className='advertising'>
      <img className="ad-img" src={img} alt='Реклама'/>
    </a>
  );
}