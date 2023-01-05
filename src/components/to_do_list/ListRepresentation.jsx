import React from "react";
import ToDoItem from "./ToDoItem";

export default function ListRepresentation(props) {
  const displayList = props.ListItemArray.map((item) => {
    return <ToDoItem item={item} SetList={props.SetList} />;
  });

  return <div className="ToDoRepresentation">{displayList}</div>;
}
