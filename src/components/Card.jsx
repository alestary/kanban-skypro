function Card({ card }) {
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className="card__theme _orange">
            {card.topic}
          </div>

          <a className="card__btn" href="#">
            <div className="card__content">
              <h3 className="card__title">
                {card.title}
              </h3>

              <div className="card__date">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  aria-hidden="true"
                >
                  <path
                    d="M2 4h9M4 1v2M9 1v2M2 2h9v9H2z"
                    fill="none"
                    stroke="currentColor"
                  />
                </svg>
                <p>{card.date}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
