import React from 'react';

import testImg from '../img/empty_card.png'

const otherListTest = [   /* Тестовый набор данных для раздела "Другое" */
  {
    title: 'Погода',
    addTitle: null,
    img: testImg,
    url: '#',
    content: [{
      text: '',
      addText: ''
    }]
  },
  {
    title: 'Посещаемое',
    addTitle: null,
    img: null,
    url: '#',
    content: [
      {
        text: 'Недвижимость - о сталинках',
        addText: ''
      },
      {
        text: 'Маркет - люстры и светильники',
        addText: ''
      },
      {
        text: 'Авто.ру - привод 4х4 до 500 000',
        addText: ''
      }
    ]
  },
  {
    title: 'Карта Германии',
    addTitle: null,
    img: null,
    url: '#',
    content: [{
      text: 'Расписание',
      addText: ''
    }]
  },
  {
    title: 'Телепрограмма',
    addTitle: 'Эфир',
    img: null,
    url: '#',
    content: [
      {
        text: '02:00 ТНТ.Best',
        addText: 'International'
      },
      {
        text: '02:15 Джинглики',
        addText: 'Карусель INТ'
      },
      {
        text: '02:25 Наедине со всеми',
        addText: 'Первый'
      }
    ]
  },
  {
    title: 'Эфир',
    addTitle: null,
    img: null,
    url: '#',
    content: [
      {
        text: '▶️ Управление как искусство',
        addText: 'Успех'
      },
      {
        text: '▶️ Ночь. Мир в это время',
        addText: 'earthTV'
      },
      {
        text: '▶️ Андрей Возн...',
        addText: 'Совершенно секретно'
      }
    ]
  }
]



export function Other({ othersList = otherListTest }) {
  /* Формирование раздела "Другое", собирая список карточек из данных */

  return (
    <div className='other-container'>
      {othersList.map((item, i) => (<OtherItem key={i} title={item.title} addTitle={item.addTitle} img={item.img} content={item.content} url={item.url} />))}
    </div>
  );

}



function OtherItem({ title, addTitle = null, img = null, content = [] , url = '#'}) {
  /* Формирование разметки каждой карточки из раздела "Другое" */
  return (
    <a href={url} className='other-item'>
      <div className='other-title'>
        <div className='title-text other-title-text'>{title}</div>
        {addTitle !== null && <div className='other-title-add'>{addTitle}</div>}
      </div>
      <ListItems img={img} items={content}/>
    </a>
  );

}


function ListItems({ img, items }) {
  /* Формирование контента из списка внутри каждой карточки из раздела "Другое" */

  return (
    <div className='other-content'>
      {img !== null && <img className="other-img" src={img}/>}
      {items.length > 0 && items.map((item, i) => (<OtherItemContent key={i} text={item.text} addText={item.addText} />))}
    </div>
  );
}


function OtherItemContent({ text = '', addText = '' }) {
  /* Форматирование каждой строки контента внутри карточки из раздела "Другое" */
  return (
    <div className='other-content-item'>
      {text !== null && <div className='base-text'>{text}</div>}
      {addText !== null && <div className='add-text'>{addText}</div>}
    </div>
  );
}
