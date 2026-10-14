import { useState } from "react";

import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderNewButton,
  HeaderUserArea,
  HeaderUserButton,
} from "./Header.styled";

import PopUser from "./popups/PopUser";

function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const user = {
    name: "Александра",
    email: "alexandra@example.com",
  };

  function toggleUserPopup() {
    setIsUserPopupOpen((previous) => !previous);
  }

  function handleLogout() {
    setIsUserPopupOpen(false);
  }

  function handleThemeChange(checked) {
    setIsDarkTheme(checked);
  }

  return (
    <HeaderWrapper>
      <HeaderBlock>
        <HeaderLogo>
          <a href="/">
            <img src="/logo.png" alt="Канбан" />
          </a>
        </HeaderLogo>

        <HeaderNav>
          <HeaderNewButton
            type="button"
            onClick={() => {
              window.location.hash = "popNewCard";
            }}
          >
            Создать новую задачу
          </HeaderNewButton>

          <HeaderUserArea>
            <HeaderUserButton
              type="button"
              aria-expanded={isUserPopupOpen}
              aria-haspopup="dialog"
              onClick={toggleUserPopup}
            >
              {user.name}
            </HeaderUserButton>

            {isUserPopupOpen && (
              <PopUser
                user={user}
                onLogout={handleLogout}
                isDarkTheme={isDarkTheme}
                onThemeChange={handleThemeChange}
                onClose={toggleUserPopup}
              />
            )}
          </HeaderUserArea>
        </HeaderNav>
      </HeaderBlock>
    </HeaderWrapper>
  );
}

export default Header;