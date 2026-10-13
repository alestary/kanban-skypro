
import { useState } from "react";

function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  function handleUserClick() {
    setIsUserPopupOpen((prev) => !prev);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo">
            <a href="/">Канбан-доска</a>
          </div>

          <button
            className="header__user"
            type="button"
            onClick={handleUserClick}
          >
            <span className="header__user-name">
              Александра
            </span>
          </button>

          <div
            className="header__pop-user-set"
            style={{
              display: isUserPopupOpen ? "block" : "none",
            }}
          >
            <div className="pop-user-set__name">
              Александра
            </div>

            <div className="pop-user-set__mail">
              alexandra@example.com
            </div>

            <button
              className="pop-user-set__theme"
              type="button"
              onClick={handleUserClick}
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
