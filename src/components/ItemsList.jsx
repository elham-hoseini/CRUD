import React from "react";
import ShowItem from "./ShowItem";

const ItemsList = (props) => {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <ShowItem {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </ShowItem>
        );
      })}
    </ul>
  );
};
export default ItemsList;
