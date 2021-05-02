import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="/">
          <img src="/images/home-icon.svg" alt="home" />
          <span>home</span>
        </a>
        <a href="/">
          <img src="/images/search-icon.svg" alt="search" />
          <span>search</span>
        </a>
        <a href="/">
          <img src="/images/watchlist-icon.svg" alt="watchlist" />
          <span>watchlist</span>
        </a>
        <a href="/">
          <img src="/images/original-icon.svg" alt="original" />
          <span>originals</span>
        </a>
        <a href="/">
          <img src="/images/movie-icon.svg" alt="movie" />
          <span>movies</span>
        </a>
        <a href="/">
          <img src="/images/series-icon.svg" alt="series" />
          <span>series</span>
        </a>
      </NavMenu>
      <UserImg
        src="data:image/jpeg;base64,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"
        alt="user-icon"
      />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 25px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        width: 100%;
        background: #fff;
        position: absolute;
        bottom: -6px;
        left: 0;
        transform: scaleX(0);
        opacity: 0;
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: left center;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
        transform-origin: center right;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
