import React, { useState } from "react";
import PostIt from "./PostIt";
import ListRepresentation from "./ListRepresentation";

function ToDoList() {
  const [listItemArray, setListItemArray] = useState([]);

  return (
    <div className="toDoListContainer">
      <PostIt SetList={setListItemArray} />
      <ListRepresentation ListItemArray={listItemArray} />
    </div>
  );
}

export default ToDoList;
