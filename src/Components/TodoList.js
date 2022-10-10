import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [value, setValue] = useState();
  console.log(value);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <Button
          style={{ borderRadius: "5px 0 0 5px" }}
          onClick={() => setValue()}
          value={value}
        >
          ALL
        </Button>
        <Button
          style={{ borderRadius: "0" }}
          onClick={() => setValue(true)}
          value={value}
        >
          Complit
        </Button>
        <Button
          style={{ borderRadius: "0 5px 5px 0" }}
          onClick={() => setValue(false)}
          value={value}
        >
          Is Not Complit
        </Button>
      </div>
      {todos
        .filter((todo) => todo.isComplit === value || value === undefined)
        .map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
