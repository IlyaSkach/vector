"use client";

import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© 2025 Vector. Все права защищены.</p>
    </FooterContainer>
  );
};

export default Footer;
