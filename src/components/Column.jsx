import Card from './Card';

function Column({ title, cards }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {cards.map((card, index) => (
          <Card
            key={`${title}-${index}`}
            theme={card.theme}
            category={card.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;