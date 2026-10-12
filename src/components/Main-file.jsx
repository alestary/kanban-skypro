import Column from './Column';

const columns = [
  {
    title: 'Без статуса',
    cards: [
      { theme: '_orange', category: 'Web Design' },
      { theme: '_green', category: 'Research' },
      { theme: '_orange', category: 'Web Design' },
      { theme: '_purple', category: 'Copywriting' },
      { theme: '_orange', category: 'Web Design' },
    ],
  },
  {
    title: 'Нужно сделать',
    cards: [
      { theme: '_green', category: 'Research' },
    ],
  },
  {
    title: 'В работе',
    cards: [
      { theme: '_green', category: 'Research' },
      { theme: '_purple', category: 'Copywriting' },
      { theme: '_orange', category: 'Web Design' },
    ],
  },
  {
    title: 'Тестирование',
    cards: [
      { theme: '_green', category: 'Research' },
    ],
  },
  {
    title: 'Готово',
    cards: [
      { theme: '_green', category: 'Research' },
    ],
  },
];

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column) => (
              <Column
                key={column.title}
                title={column.title}
                cards={column.cards}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;