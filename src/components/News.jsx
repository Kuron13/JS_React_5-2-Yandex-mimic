import React from 'react';
import { useState } from 'react';

import testImg from '../img/empty_card.png'

 /* Тестовый набор тегов для раздела "Новости" */
export const tagsListTest = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем']

export const newsListTest = [ /* Тестовый набор новостей для раздела "Новости" */
  {img: testImg, text: 'Текст новости 1', url: '#', tag: 'Сейчас в СМИ'},
  {img: testImg, text: 'Текст новости 2', url: '#', tag: 'Сейчас в СМИ'},
  {img: testImg, text: 'Текст новости 3', url: '#', tag: 'Сейчас в СМИ'},
  {img: testImg, text: 'Текст новости 4', url: '#', tag: 'Сейчас в СМИ'},
  {img: testImg, text: 'Текст новости 5', url: '#', tag: 'Сейчас в СМИ'},
  {img: testImg, text: 'Текст новости 6', url: '#', tag: 'в Германии'},
  {img: testImg, text: 'Текст новости 7', url: '#', tag: 'в Германии'},
  {img: testImg, text: 'Текст новости 8', url: '#', tag: 'в Германии'},
  {img: testImg, text: 'Текст новости 9', url: '#', tag: 'в Германии'},
  {img: testImg, text: 'Текст новости 10', url: '#', tag: 'Рекомендуем'},
  {img: testImg, text: 'Текст новости 11', url: '#', tag: 'Рекомендуем'}
]


export function News() {
  /* Формирование раздела "Новости" из тулбара тегов и списка новостей */
  /* Фильтрация новостей по выбранному тегу через state */
  
  const [selected, setSelected] = useState("Сейчас в СМИ")
  const [filteredNews, setFiltered] = useState(newsListTest.filter(news => news.tag === selected))

  const filtration = (selectedTag) => {
    const filteredNews = newsListTest.filter(news => news.tag === selectedTag);
    setFiltered(filteredNews);
  };

  return (
    <div className='news'>
      <div className='news-header'>
        <NewsToolbar tagsList={tagsListTest} selected={selected} setSelected={setSelected} filtration={filtration} />
        <div className='add-text date-time'>31 июля, среда 02:32</div>
      </div>
      <NewsList newsList={filteredNews}/>
    </div>
  )
}

export function NewsToolbar({ tagsList, selected, setSelected, filtration }) {
  /* Тулбар тегов для раздела 'Новости' */

  const selectTag = (e) => {
    let tag = e.target.textContent;
    setSelected(tag);
    filtration(tag)
  };

  return (
    <div className='news-tags'>
      {tagsList.map((tag, i) => (<button onClick={selectTag} className={`tag ${tag === selected ? 'tag-selected' : ''}`} key={i}>{tag}</button>))}
    </div>
  );
}

export function NewsList({ newsList }) {
  /* Формирование списка новостей */

  return (
    <div className='news-content'>
      {newsList.map((news, i) => (<NewsItem key={i} img={news.img} text={news.text} url={news.url}/>))}
    </div>
  );
}


export function NewsItem({ img = null, text = 'Текст новости', url = '#' }) {
  /* Форматирование каждой строки новости */
  return (
    <a href={url} className='news-item'>
      <img className='news-item-img' src={img} alt='icon'/>
      <div className='news-item-text base-text'>{text}</div>
    </a>
  );
}

