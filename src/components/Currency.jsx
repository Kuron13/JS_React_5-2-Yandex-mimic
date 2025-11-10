import React from 'react';
import testImg from '../img/empty_card.png'

export const currencyListTest = [ /* Тестовый набор данных для раздела "Валюты" */
  {name: 'USD MOEX', price: '63,52', change: '+0,09'},
  {name: 'EUR MOEX', price: '70,86', change: '+0,14'},
  {name: 'Нефть', price: '64,90', change: '+1,63%'}
]

export function Currency({ currencyList }) {
  /* Формирование раздела "Валюты", собирая список строк из данных */

  return (
    <div className='news-currency'>
      {currencyList.map((cur, i) => <CurrencyItem key={i} name={cur.name} price={cur.price} change={cur.change}/>)}
      <div className='currency-other add-text'>...</div>
    </div>
  );
}


export function CurrencyItem({ name = '', price = '', change = '' }) {
  /* Форматирование каждой строки из раздела "Валюты" */
  return (
    <div className='currency-item'>
      <div className='currency-name'>{name}</div>
      <div className='currency-price'>{price}</div>
      <div className='currency-change add-text'>{change}</div>
    </div>
  );

}
