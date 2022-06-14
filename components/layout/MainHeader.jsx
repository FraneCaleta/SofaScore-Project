/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import Link from "next/link";
import * as S from "../styles/MainHeader.styled";
import { ThemeProvider } from "styled-components";

const Header = React.memo(() => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);

  function toggleTheme() {
    let element = document.getElementsByTagName("body")[0];
    element.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  }

  const theme = {
    main: "yellow",
  };

  return (
    <ThemeProvider theme={theme}>
      <S.StyledHeader>
        <S.HeaderContainer>
          <S.MainHeaderContainer>
            <Link href={"/"}>
              <img
                width={40}
                src="https://www.sofascore.com/static/images/apple-icon-180x180.png"
                alt="SofaScore"
              />
            </Link>
            <S.FavoritesContainer>
              <Link href={"/favorites/"}>Favorites</Link>
              <DarkModeToggle
                onChange={toggleTheme}
                checked={isDarkMode}
                size={60}
              />
            </S.FavoritesContainer>
          </S.MainHeaderContainer>
        </S.HeaderContainer>
        {/* <SportHeader /> */}
      </S.StyledHeader>
    </ThemeProvider>
  );
});

Header.displayName = "Header";

export default Header;