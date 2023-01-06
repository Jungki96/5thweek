// src/App.jsx

import React, { useEffect } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
import { useDispatch } from "react-redux";
>>>>>>> orgin/master
import { __getTodos } from "./redux/modules/todosSlice";

const App = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { isLoading, error, todos } = useSelector((state) => state.todos);
=======
>>>>>>> orgin/master

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

<<<<<<< HEAD
  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
=======
  return <div>App</div>;
>>>>>>> orgin/master
};

export default App;
