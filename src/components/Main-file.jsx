import { cards } from "../../data";
import Column from "./column";
import { useNavigate } from "react-router-dom";

import {
  MainWrapper,
  MainBlock,
  MainContent,
  MainStatuses,
} from "./Main-file.styled";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main() {
  return (
    <MainWrapper>
      <MainBlock>
        <MainContent>
          <MainStatuses>
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
          </MainStatuses>
        </MainContent>
      </MainBlock>
    </MainWrapper>
  );
}

export default Main;