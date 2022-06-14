/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import * as S from "../styles/MainHeader.styled";

const Header = React.memo(() => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);

  function toggleTheme() {
    let element = document.getElementsByTagName("body")[0];
    element.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  }

  return (
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
          <S.LiveGamesContainer>
            <Link href={"/live"}>
              <a>
                <FontAwesomeIcon
                  icon={faFireFlameCurved}
                  color="red"
                  size="lg"
                />{" "}
                LIVE
              </a>
            </Link>
          </S.LiveGamesContainer>
          <S.FavoritesContainer>
            <Link href={"/"}>Favorites </Link>
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
  );
});

Header.displayName = "Header";

export default Header;
