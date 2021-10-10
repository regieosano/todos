import React, { useEffect, useState } from 'react';
import { fetchTodos } from '../api';
import Header from '../components/parts/Header';
import Todos from '../components/parts/Todos';
import Footer from '../components/parts/Footer';

const Main = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetchTodos();
      setTodos(response.data);
    };
    getTodos();
  }, []);

  return (
    <>
      <Header />
      <Todos todos={todos} />
      <Footer />
    </>
  );
};

export default Main;
