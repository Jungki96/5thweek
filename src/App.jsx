// src/App.jsx

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getTodos } from "./redux/modules/todosSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  return <div>App</div>;
};

export default App;
