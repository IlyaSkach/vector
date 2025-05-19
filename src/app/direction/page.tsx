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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function Direction() {
  return (
    <MainContainer>
      <Header />
      <MainContent>
        <h1>Заполнение направления</h1>
        <Form>
          <FormGroup>
            <Label htmlFor="name">Наименование заказчика</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="date">Дата направления</Label>
            <Input type="date" id="date" name="date" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="description">Описание работ</Label>
            <TextArea id="description" name="description" required />
          </FormGroup>

          <Button type="submit">Отправить</Button>
        </Form>
      </MainContent>
      <Footer />
    </MainContainer>
  );
}
