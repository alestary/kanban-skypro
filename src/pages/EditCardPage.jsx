
import { useNavigate, useParams } from "react-router-dom";

function EditCardPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleCancel() {
    navigate("/");
  }

  return (
    <div>
      <h2>Редактирование задачи</h2>

      <p>ID задачи: {id}</p>


      <button type="button" onClick={handleCancel}>
        Отмена
      </button>
    </div>
  );
}

export default EditCardPage;
