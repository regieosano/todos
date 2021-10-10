import React from 'react';

const Todos = ({ todos }) => {
  return (
    <>
      {todos.map((todo, index) => {
        return <p key={index}>{todo.title}</p>;
      })}
    </>
  );
};

export default Todos;
