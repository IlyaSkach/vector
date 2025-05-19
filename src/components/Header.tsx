"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;

  &:hover {
    color: #007bff;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink href="/">Главная страница</NavLink>
        <NavLink href="/licenses">Лицензии</NavLink>
        <NavLink href="/services">Услуги</NavLink>
        <NavLink href="/news">Новости</NavLink>
        <NavLink href="/direction">Заполнение направления</NavLink>
        <NavLink href="/protocol">Проверка протокола</NavLink>
        <NavLink href="/feedback">Обратная связь</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
