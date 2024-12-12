import React from 'react';
import ProductList from '../components/ProductList';
import './styles/MainPage.css'; // Импортируем стили

const MainPage = () => {
  return (
    <div>
      <header className="header">
        <p1>PRODUCTS</p1>
        <p className="subheader">356 Total Products.</p> {/* Подпись в хедере */}
      </header>
      <ProductList />
    </div>
  );
};

export default MainPage;
