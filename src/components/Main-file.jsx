import { cards } from "../../data";
import Column from "./Column";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {statuses.map((status) => {
            const columnCards = cards.filter(
              (card) => card.status === status
            );

            return (
              <Column
                key={status}
                title={status}
                cards={columnCards}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Main;
