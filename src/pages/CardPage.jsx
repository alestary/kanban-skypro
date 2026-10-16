
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styles } from "./CardPage.styled";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    try {
      const cards = JSON.parse(
        localStorage.getItem("kanbanCards") || "[]"
      );

      const foundCard = cards.find(
        (item) => String(item.id) === String(id)
      );

      setCard(foundCard || null);
      setNotFound(!foundCard);
    } catch {
      setCard(null);
      setNotFound(true);
    }
  }, [id]);

  function handleClose() {
    navigate("/", { replace: true });
  }

  function handleEdit() {
    navigate(`/edit-card/${id}`);
  }

  function handleDelete() {
    const confirmed = window.confirm(
      "Вы действительно хотите удалить задачу?"
    );

    if (!confirmed) return;

    try {
      const cards = JSON.parse(
        localStorage.getItem("kanbanCards") || "[]"
      );

      const updatedCards = cards.filter(
        (item) => String(item.id) !== String(id)
      );

      localStorage.setItem(
        "kanbanCards",
        JSON.stringify(updatedCards)
      );

      navigate("/", { replace: true });
    } catch {
      window.alert("Не удалось удалить задачу.");
    }
  }

  if (!card) {
    return (
      <div style={styles.overlay} onClick={handleClose}>
        <div
          style={styles.error}
          onClick={(event) => event.stopPropagation()}
        >
          <h2>
            {notFound ? "Задача не найдена" : "Загрузка задачи..."}
          </h2>

          <button
            type="button"
            style={styles.primaryButton}
            onClick={handleClose}
          >
            Вернуться на доску
          </button>
        </div>
      </div>
    );
  }

  const category = card.topic || card.category || "Web Design";
  const status = statuses.includes(card.status)
    ? card.status
    : "Без статуса";

  return (
    <div style={styles.overlay} onClick={handleClose}>
      <section
        style={styles.modal}
        onClick={(event) => event.stopPropagation()}
        aria-labelledby="card-title"
      >
        <div style={styles.header}>
          <h1 id="card-title" style={styles.title}>
            {card.title}
          </h1>

          <span style={styles.category}>
            {category}
          </span>
        </div>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Статус</h2>

          <div style={styles.statusList}>
            {statuses.map((item) => (
              <span
                key={item}
                style={{
                  ...styles.status,
                  ...(item === status ? styles.activeStatus : {}),
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <div style={styles.content}>
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Описание задачи
            </h2>

            <div style={styles.description}>
              {card.description || "Описание отсутствует"}
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Даты</h2>

            <p style={styles.date}>
              {card.dueDate || "Срок не указан"}
            </p>

            <p style={styles.hint}>
              Дата создания: {card.date || "Не указана"}
            </p>
          </section>
        </div>

        <div style={styles.actions}>
          <div style={styles.actionGroup}>
            <button
              type="button"
              style={styles.secondaryButton}
              onClick={handleEdit}
            >
              Редактировать задачу
            </button>

            <button
              type="button"
              style={styles.dangerButton}
              onClick={handleDelete}
            >
              Удалить задачу
            </button>
          </div>

          <button
            type="button"
            style={styles.primaryButton}
            onClick={handleClose}
          >
            Закрыть
          </button>
        </div>
      </section>
    </div>
  );
}

export default CardPage;
