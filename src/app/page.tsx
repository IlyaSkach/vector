"use client";

import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <MainContent>
        <h1>Добро пожаловать</h1>
        <p>Здесь будет основной контент главной страницы</p>
      </MainContent>
      <Footer />
    </MainContainer>
  );
}
