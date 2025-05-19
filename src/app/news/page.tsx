"use client";

import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

const NewsContainer = styled.div`
  display: grid;
  gap: 2rem;
`;

const NewsItem = styled.article`
  padding: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 8px;
`;

export default function News() {
  return (
    <MainContainer>
      <Header />
      <MainContent>
        <h1>Новости</h1>
        <NewsContainer>
          <NewsItem>
            <h2>Заголовок новости 1</h2>
            <p>Здесь будет текст новости...</p>
            <small>Дата публикации: 01.01.2024</small>
          </NewsItem>
          <NewsItem>
            <h2>Заголовок новости 2</h2>
            <p>Здесь будет текст новости...</p>
            <small>Дата публикации: 02.01.2024</small>
          </NewsItem>
        </NewsContainer>
      </MainContent>
      <Footer />
    </MainContainer>
  );
}
