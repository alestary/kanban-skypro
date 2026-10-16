import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCardStyles as styles } from "./AddCardPage.styled";

function AddCardPage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design");
  const [status, setStatus] = useState("Без статуса");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const categories = ["Web Design", "Research", "Copywriting"];

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Введи название задачи");
      return;
    }

    const savedCards = JSON.parse(
      localStorage.getItem("kanbanCards") || "[]"
    );

    const newCard = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      topic,
      category: topic,
      status,
      date: new Date().toLocaleDateString("ru-RU"),
      dueDate,
    };

    localStorage.setItem(
      "kanbanCards",
      JSON.stringify([...savedCards, newCard])
    );

    navigate("/", { replace: true });
  }

  return (
    <div style={styles.overlay}>
      <form style={styles.modal} onSubmit={handleSubmit}>
        <h1 style={styles.title}>Создание задачи</h1>

        <div style={styles.content}>
          <div style={styles.leftColumn}>
            <label htmlFor="task-title" style={styles.label}>
              Название задачи
            </label>

            <input
              id="task-title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                if (error) setError("");
              }}
              placeholder="Введите название задачи..."
              style={{
                ...styles.input,
                ...(error ? { borderColor: "#ff5b5b" } : {}),
              }}
              required
            />

            <label htmlFor="task-description" style={styles.label}>
              Описание задачи
            </label>

            <textarea
              id="task-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Введите описание задачи..."
              style={styles.textarea}
            />
          </div>

          <div style={styles.rightColumn}>
            <label htmlFor="task-date" style={styles.label}>
              Даты
            </label>

            <input
              id="task-date"
              type="date"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
              style={styles.dateInput}
              aria-label="Срок выполнения задачи"
            />

            <p style={styles.dateHint}>
              Выберите срок исполнения.
            </p>
          </div>

          <div style={styles.categorySection}>
            <p style={styles.label}>Категория</p>

            <div style={styles.categoryList}>
              {categories.map((category) => {
                const selected = topic === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setTopic(category)}
                    aria-pressed={selected}
                    style={{
                      ...styles.categoryButton,
                      ...styles.categoryColors[category],
                      ...(selected
                        ? {
                            outline: "2px solid",
                            outlineOffset: "2px",
                          }
                        : {}),
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {error && (
          <p role="alert" style={styles.error}>
            {error}
          </p>
        )}

        <div style={styles.actions}>
          <button type="submit" style={styles.submitButton}>
            Создать задачу
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCardPage;