import React, { useState } from "react";
import PostIt from "./PostIt";
import ListRepresentation from "./ListRepresentation";

function ToDoList() {
  const [listItemArray, setListItemArray] = useState([]);
  console.log(listItemArray);

  return (
    <div className="toDoListContainer">
      <PostIt SetList={setListItemArray} ListItemArray={listItemArray} />
      <ListRepresentation SetList={setListItemArray} ListItemArray={listItemArray} />
    </div>
  );
}

export default ToDoList;
