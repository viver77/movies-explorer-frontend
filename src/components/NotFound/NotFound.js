import React from 'react';
import './NotFound.css';
import {Link, useHistory} from 'react-router-dom';

function NotFound() {

  const history = useHistory();

  const handleBtnGoBackClick = () => {
    history.goBack();
  }

  return (
    <main className='not-found'>
      <div className='not-found__container'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Страница не найдена</p>
          <button className="not-found__btn-go-back"
                  onClick={handleBtnGoBackClick}
          >
              Назад
          </button>
      </div>
    </main>
  )
}

export default NotFound;
