import { useParams } from "react-router-dom";

function CardPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Просмотр задачи</h1>
      <p>ID задачи: {id}</p>
    </div>
  );
}

export default CardPage;