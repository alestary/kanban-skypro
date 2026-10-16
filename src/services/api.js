
const API_URL = "https://wedev-api.sky.pro/api";

export async function apiRequest(path, options = {}, withAuth = false) {
  const headers = {
    ...options.headers,
  };

  if (withAuth) {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Необходимо войти в аккаунт");
    }

    headers.Authorization = `Bearer ${token}`;
  }

  let response;

  try {
    response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers,
    });
  } catch {
    throw new Error(
      "Не удалось подключиться к серверу. Проверь интернет-соединение."
    );
  }

  const contentType = response.headers.get("content-type") || "";
  let data = null;

  if (contentType.includes("application/json")) {
    try {
      data = await response.json();
    } catch {
      throw new Error("Сервер вернул некорректный JSON");
    }
  } else if (response.status !== 204) {
    const text = await response.text();

    if (text) {
      data = { message: text };
    }
  }

  if (!response.ok) {
    const message =
      data?.message ||
      data?.error ||
      data?.details ||
      `Ошибка сервера: ${response.status}`;

    throw new Error(message);
  }

  return data;
}
