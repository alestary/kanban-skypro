import Calendar from './Calendar';

function Card({ theme, category }) {
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className={`card__theme ${theme}`}>
            <p className={theme}>{category}</p>
          </div>

          <a href="#popBrowse" target="_self">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>

        <div className="card__content">
          <a href="#popBrowse" target="_self">
            <h3 className="card__title">Название задачи</h3>
          </a>

          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default Card;