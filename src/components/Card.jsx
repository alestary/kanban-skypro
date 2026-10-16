
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CardWrapper,
  CardGroup,
  CardTopic,
  CardLink,
  CardContent,
  CardTitle,
  CardDate,
} from "./Card.styled";

function Card({ card }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topicToColor = {
    "Web Design": "orange",
    Research: "green",
    Copywriting: "purple",
  };

  function handleDelete() {
    const confirmed = window.confirm(
      `Удалить задачу «${card.title}»?`
    );

    if (!confirmed) return;

    const savedCards = JSON.parse(
      localStorage.getItem("kanbanCards") || "[]"
    );

    const updatedCards = savedCards.filter(
      (item) => String(item.id) !== String(card.id)
    );

    localStorage.setItem(
      "kanbanCards",
      JSON.stringify(updatedCards)
    );

    setIsMenuOpen(false);
    window.location.reload();
  }

  const menuItemStyle = {
    display: "block",
    width: "100%",
    padding: "10px 12px",
    border: "none",
    borderRadius: "5px",
    background: "transparent",
    color: "#333",
    fontSize: "13px",
    textAlign: "left",
    cursor: "pointer",
  };

  return (
    <CardWrapper>
      <CardGroup style={{ position: "relative" }}>
        <CardTopic
          $topic={card.topic}
          $color={topicToColor[card.topic]}
        >
          <p>{card.topic}</p>
        </CardTopic>

        <CardLink
          href="#"
          aria-label="Меню задачи"
          aria-expanded={isMenuOpen}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsMenuOpen((open) => !open);
          }}
        >
          <div />
          <div />
          <div />
        </CardLink>

        {isMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              zIndex: 100,
              minWidth: "180px",
              padding: "6px",
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              boxShadow: "0 5px 16px rgba(0,0,0,0.12)",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              style={menuItemStyle}
              onClick={() => {
                setIsMenuOpen(false);
                navigate(`/card/${card.id}`);
              }}
            >
              Открыть задачу
            </button>

            <button
              type="button"
              style={menuItemStyle}
              onClick={() => {
                setIsMenuOpen(false);
                navigate(`/edit-card/${card.id}`);
              }}
            >
              Редактировать
            </button>

            <button
              type="button"
              style={{
                ...menuItemStyle,
                color: "#dc2626",
              }}
              onClick={handleDelete}
            >
              Удалить задачу
            </button>
          </div>
        )}
      </CardGroup>

      <CardContent>
        <CardTitle>{card.title}</CardTitle>

        <CardDate>
          <p>{card.date}</p>
        </CardDate>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;
