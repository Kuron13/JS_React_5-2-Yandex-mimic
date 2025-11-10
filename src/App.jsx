import './App.css'
import React from 'react';

import { News } from './components/News.jsx'
/* import { currencyListTest } from './components/Currency.jsx' */
import { Currency } from './components/Currency.jsx'
import { AddNews } from './components/AddNews.jsx'
/* import { otherListTest } from './components/Other.jsx' */
import { Other } from './components/Other.jsx'
import { Find } from './components/Find.jsx'
import { Adversting } from './components/Adversting.jsx'

import testImg from './img/empty_card.png'


function App() {

  return (
    <div className="container">
      <header className='header'>

        <div className='main-block'>
          <News />
          <Currency />
          {/* <Currency currencyList={currencyListTest} /> */}
        </div>
        
        <div className='add-block'>
          <AddNews img={testImg} url={'#'} title={'Работа над ошибками'} text={'Смотрите на Яндексе и запоминайте'} />
        </div>

      </header>
      
      <Find />
      <Adversting img={testImg} url={'#'} />
      <Other />
      {/* <Other othersList={otherListTest} /> */}
    </div>
  )
}

export default App
